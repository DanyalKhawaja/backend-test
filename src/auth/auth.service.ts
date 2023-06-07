import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { LoginDto } from "src/user/dto/userDto";
import { genHash } from "src/util";
import { Repository } from "typeorm";
import { JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(loginDto: LoginDto): Promise<string> {
    const genLoginPasswordHash = genHash(loginDto.password);
    const userEntity = await this.userRepository.findOne({
      where: { email: loginDto.email },
    });
    if (userEntity) {
      const genJwt = this.jwtService.signAsync({
        sub: userEntity.id.toString(),
      });
      if (userEntity.password == (await genLoginPasswordHash)) {
        return await genJwt;
      }
    }
    throw new UnauthorizedException();
  }

}
