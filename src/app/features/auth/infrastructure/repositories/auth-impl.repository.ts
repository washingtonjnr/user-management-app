import { map, Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';

import { AppHttpClient } from '@app/core/application/ports/http-client.abstract';

import { LoginDto } from '@app/features/auth/application/dtos/login.dto';
import { AuthUser } from '@app/features/auth/domain/entities/auth-user.entity';
import { RegisterDto } from '@app/features/auth/application/dtos/register.dto';
import { AuthRepository } from '@app/features/auth/domain/repositories/auth.repository';
import { AuthUserJson, AuthAdapter } from '@app/features/auth/infrastructure/adapters/auth.adapter';

@Injectable()
export class AuthRepositoryImpl extends AuthRepository {
  private readonly http = inject(AppHttpClient);

  login(dto: LoginDto): Observable<AuthUser> {
    return this.http
      .post<AuthUserJson>('/auth/login', AuthAdapter.loginToJson(dto))
      .pipe(map(AuthAdapter.fromJson));
  }

  register(dto: RegisterDto): Observable<AuthUser> {
    return this.http
      .post<AuthUserJson>('/auth/register', AuthAdapter.registerToJson(dto))
      .pipe(map(AuthAdapter.fromJson));
  }
}
