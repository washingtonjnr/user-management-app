import { Observable } from 'rxjs';
import { User } from '@app/features/users/domain/entities/user.entity';

export abstract class UserRepository {
  abstract findAll(): Observable<User[]>;
  abstract findById(id: string): Observable<User>;
}
