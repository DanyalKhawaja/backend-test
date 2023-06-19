import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { FilmModule } from "./film/film.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentModule } from "./comment/comment.module";
import { AuthModule } from "./auth/auth.module";
import config from "ormconfig";
import { JwtModule } from "@nestjs/jwt";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
  imports: [
    ServeStaticModule.forRoot({rootPath: join(__dirname,"../../","public"), exclude: ['/api/(.*)'],}),
    TypeOrmModule.forRoot(config),
    JwtModule.register({
      secret: "secret",
      signOptions: { expiresIn: "60s" },
      global: true,
    }),
    UserModule,
    FilmModule,
    CommentModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
