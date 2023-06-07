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
    await this.elasticsearchService.index({
      id: film.id.toString(),
      index: "film",
      body: film,
    });
    return film;
  }

  async searchFilm(text: string): Promise<SearchResponse> {
    const results = await this.elasticsearchService.search({
      index: "film",
      query: {
        match: {
          quote: text,
        },
      },
    });
    return results;
  }
}
