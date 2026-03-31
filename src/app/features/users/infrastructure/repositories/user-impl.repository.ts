import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AppHttpClient } from '@core/application/ports/http-client.abstract';

import { User } from '@features/users/domain/entities/user.entity';
import { UserRepository } from '@features/users/domain/repositories/user.repository';
import { UserAdapter, UserData } from '@features/users/infrastructure/adapters/user.adapter';

@Injectable()
export class UserRepositoryImpl extends UserRepository {
  private readonly http = inject(AppHttpClient);

  findAll(): Observable<User[]> {
    return this.http
      .get<UserData[]>('/users')
      .pipe(map((list) => list.map(UserAdapter.fromJson)));
  }

  findById(id: string): Observable<User> {
    return this.http.get<UserData>(`/users/${id}`).pipe(map(UserAdapter.fromJson));
  }
}
