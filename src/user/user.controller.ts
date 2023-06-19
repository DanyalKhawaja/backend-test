import { Controller, Get, Post, Body, Param, UseGuards } from "@nestjs/common";
import { UserDto } from "./dto/userDto";
import { UserService } from "./user.service";
import { User } from "src/entities/user.entity";
import { AuthGuard } from "src/auth/auth.guard";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("all")
  async all(): Promise<User[]> {
    return this.userService.all();
  }


  // @UseGuards(AuthGuard)
  @Get(":id")
  async getUser(@Param("id") id: number): Promise<User> {
    return this.userService.getUser(id);
  }

  @Post("register")
  async createUser(@Body() userDto: UserDto): Promise<User> {
    return this.userService.createUser(userDto);
  }
}
