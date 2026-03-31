import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginDto } from '@app/features/auth/application/dtos/login.dto';
import { AuthUser } from '@app/features/auth/domain/entities/auth-user.entity';
import { AuthRepository } from '@app/features/auth/domain/repositories/auth.repository';


@Injectable({ providedIn: 'root' })
export class LoginUseCase {
  private readonly authRepository = inject(AuthRepository);

  execute(dto: LoginDto): Observable<AuthUser> {
    return this.authRepository.login(dto);
  }
}
