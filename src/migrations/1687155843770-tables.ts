import { ElasticsearchService } from "@nestjs/elasticsearch";
import { Film } from "src/entities/film.entity";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Seed1687155843770 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const filmTable = new Table({
      name: "film",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment",
        },
        {
          name: "name",
          type: "varchar",
        },
        {
          name: "description",
          type: "varchar",
        },
        {
          name: "releaseDate",
          type: "date",
        },
        {
          name: "ticketPrice",
          type: "int",
        },
        {
          name: "country",
          type: "varchar",
        },
        {
          name: "genre",
          type: "varchar",
        },
        {
          name: "rating",
          type: "int",
        },
      ],
    });

    const userTable = new Table({
      name: "user",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment",
        },
        {
          name: "name",
          type: "varchar",
        },
        {
          name: "email",
          type: "varchar",
        },
        {
          name: "password",
          type: "varchar",
        },
      ],
    });

    await queryRunner.createTable(new Table(userTable), true);
    await queryRunner.createTable(new Table(filmTable), true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("film");
    await queryRunner.dropTable("user");
  }
}
