import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Query,
} from "@nestjs/common";
import { FilmDto } from "./dto/filmDto";
import { FilmService } from "./film.service";
import { Film } from "src/entities/film.entity";
import { AuthGuard } from "src/auth/auth.guard";
import { SearchResponse } from "@elastic/elasticsearch/lib/api/types";

@Controller("film")
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get("all")
  async all(): Promise<Film[]> {
    return this.filmService.all();
  }

  @Get("search")
  async search(
    @Query("text") text: string,
    @Query("field") field: string,
  ): Promise<SearchResponse> {
    return this.filmService.search(text, field);
  }

  @UseGuards(AuthGuard)
  @Get(":id")
  async getFilm(@Param("id") id: number): Promise<Film> {
    return this.filmService.getFilm(id);
  }

  @Post("add")
  async addFilm(@Body() filmDto: FilmDto): Promise<Film> {
    return this.filmService.addFilm(filmDto);
  }
}
