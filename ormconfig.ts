import * as path from 'path';
import { Film } from 'src/entities/film.entity';
import { User } from 'src/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'backendTest',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  entities: [User, Film],
  logging: true,
  synchronize: false,
  migrationsRun: true,
  migrations: [ path.resolve(`${__dirname}/src/migrations/*{.ts,.js}`)],
};

export default config;
