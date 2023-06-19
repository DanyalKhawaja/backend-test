import { Injectable, UseGuards } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FilmDto } from "./dto/filmDto";
import { Film } from "src/entities/film.entity";
import { ElasticsearchService } from "@nestjs/elasticsearch";
import { SearchResponse } from "@elastic/elasticsearch/lib/api/types";
import { AuthGuard } from "src/auth/auth.guard";

@Injectable()
@UseGuards(AuthGuard)
export class FilmService {
  constructor(
    @InjectRepository(Film) private readonly filmRepository: Repository<Film>,
    private readonly elasticsearchService: ElasticsearchService,
  ) {}

  async getFilm(id: number): Promise<Film> {
    return await this.filmRepository.findOne({ where: { id } });
  }

  async addFilm(filmDto: FilmDto): Promise<Film> {
    let film = this.filmRepository.create(filmDto);
    film = await this.filmRepository.save(film);
    const esResult = await this.elasticsearchService.index({
      id: film.id.toString(),
      index: "film",
      body: film,
    });
    return film;
  }

  async search(text: string, field: string): Promise<SearchResponse> {
    const results = await this.elasticsearchService.search({
      index: "film",
      min_score: 0.5,
      query: {
        bool: {
          must: [
            {
              match_phrase_prefix: {
                [field]: {
                  query: text,
                },
              },
            },
          ],
          filter: [],
          should: [],
          must_not: [],
        },
      },
    });
    return results;
  }

  async all(): Promise<Film[]> {
    return await this.filmRepository.find();
  }
}
