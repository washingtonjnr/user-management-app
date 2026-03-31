import { Observable } from 'rxjs';

import { LoginDto } from '@app/features/auth/application/dtos/login.dto';
import { RegisterDto } from '@app/features/auth/application/dtos/register.dto';
import { AuthUser } from '@app/features/auth/domain/entities/auth-user.entity';

export abstract class AuthRepository {
  abstract login(dto: LoginDto): Observable<AuthUser>;
  abstract register(dto: RegisterDto): Observable<AuthUser>;
}
