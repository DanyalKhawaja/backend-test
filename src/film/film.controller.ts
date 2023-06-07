import { Controller, Get, Post, Body, Param, UseGuards } from "@nestjs/common";
import { FilmDto } from "./dto/filmDto";
import { FilmService } from "./film.service";
import { Film } from "src/entities/film.entity";
import { AuthGuard } from "src/auth/auth.guard";

@Controller("film")
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

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
