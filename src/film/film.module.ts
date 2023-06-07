import { Module } from "@nestjs/common";
import { FilmController } from "./film.controller";
import { FilmService } from "./film.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Film } from "src/entities/film.entity";
import { ElasticsearchModule } from "@nestjs/elasticsearch";

@Module({
  imports: [TypeOrmModule.forFeature([Film]),ElasticsearchModule.register({
    node: "http://localhost:9200"
  })],
  controllers: [FilmController],
  providers: [FilmService],
})
export class FilmModule {}
