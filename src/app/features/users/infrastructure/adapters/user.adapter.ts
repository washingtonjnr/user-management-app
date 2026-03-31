import { User } from '@features/users/domain/entities/user.entity';
import { UserDto } from '@features/users/application/dtos/user.dto';

export interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
  created_at: string;
}

export class UserAdapter {
  static fromJson(json: UserData): User {
    return new User(json.id, json.name, json.email, json.role, new Date(json.created_at));
  }

  static toJson(user: User): UserData {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      created_at: user.createdAt.toISOString(),
    };
  }

  static toDto(user: User): UserDto {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt.toISOString(),
    };
  }
}
