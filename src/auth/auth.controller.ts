import { LoginDto } from "src/user/dto/userDto";
import { Controller, Get, Post, Body, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Response } from "express";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signin")
  async signin(@Body() loginDto: LoginDto, @Res() res: Response) {
    const token = await this.authService.signIn(loginDto);
    res.cookie("token", token, { httpOnly: true });
    res.end();
  }

  @Get("signout")
  async signout(@Res() res: Response) {
    res.clearCookie("token");
    res.end();
  }
}
