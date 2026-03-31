import { LoginDto } from "@app/features/auth/application/dtos/login.dto";
import { RegisterDto } from "@app/features/auth/application/dtos/register.dto";
import { AuthUser } from "@app/features/auth/domain/entities/auth-user.entity";

export interface AuthUserJson {
  id: string;
  name: string;
  email: string;
  token: string;
  role: string;
}

export class AuthAdapter {
  static fromJson(json: AuthUserJson): AuthUser {
    return new AuthUser(json.id, json.name, json.email, json.token, json.role);
  }

  static loginToJson(dto: LoginDto): Record<string, string> {
    return { email: dto.email, password: dto.password };
  }

  static registerToJson(dto: RegisterDto): Record<string, string> {
    return { name: dto.name, email: dto.email, password: dto.password };
  }
}
