import { Observable } from 'rxjs';

export interface HttpRequestConfig {
  headers?: Record<string, string>;
  params?: Record<string, string | number | boolean>;
}

export abstract class AppHttpClient {
  abstract get<T>(url: string, config?: HttpRequestConfig): Observable<T>;

  abstract post<T>(url: string, body: unknown, config?: HttpRequestConfig): Observable<T>;

  abstract put<T>(url: string, body: unknown, config?: HttpRequestConfig): Observable<T>;

  abstract delete<T>(url: string, config?: HttpRequestConfig): Observable<T>;
}
