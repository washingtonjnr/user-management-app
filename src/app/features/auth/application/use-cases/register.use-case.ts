import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RegisterDto } from '@app/features/auth/application/dtos/register.dto';
import { AuthUser } from '@app/features/auth/domain/entities/auth-user.entity';
import { AuthRepository } from '@app/features/auth/domain/repositories/auth.repository';

@Injectable({ providedIn: 'root' })
export class RegisterUseCase {
  private readonly authRepository = inject(AuthRepository);

  execute(dto: RegisterDto): Observable<AuthUser> {
    return this.authRepository.register(dto);
  }
}
