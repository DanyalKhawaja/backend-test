import { Injectable } from "@nestjs/common";
import { UserDto } from "./dto/userDto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async getUser(id: number): Promise<User> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async createUser(userDto: UserDto): Promise<User> {
    const user = this.userRepository.create(userDto);
    return await this.userRepository.save(user);
  }
}
