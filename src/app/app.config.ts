import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from '@app/app.routes';

import { AppHttpClient } from '@core/application/ports/http-client.abstract';
import { AxiosHttpClient } from '@core/infrastructure/http/axios-http-client';

import { AuthRepository } from '@features/auth/domain/repositories/auth.repository';
import { UserRepository } from '@features/users/domain/repositories/user.repository';
import { AuthRepositoryImpl } from '@app/features/auth/infrastructure/repositories/auth-impl.repository';
import { UserRepositoryImpl } from '@app/features/users/infrastructure/repositories/user-impl.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    
    provideRouter(routes),

    provideHttpClient(withFetch()),
    
    { provide: AppHttpClient, useClass: AxiosHttpClient },
    { provide: AuthRepository, useClass: AuthRepositoryImpl },
    { provide: UserRepository, useClass: UserRepositoryImpl },
  ],
};
