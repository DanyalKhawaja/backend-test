import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext) {
    try {
      const request = context.switchToHttp().getRequest();

      const token = request.cookies["token"]; // Assuming the token is sent in the Authorization header as "Bearer <token>"

      if (token) {
        const decoded = this.jwtService.verify(token, { secret: "secret" }); // Replace 'your-secret-key' with your own secret key
        request.user = decoded;
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }
}
