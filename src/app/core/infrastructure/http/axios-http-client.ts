import { Injectable } from '@angular/core';

import axios, { AxiosInstance } from 'axios';
import { from, map, Observable } from 'rxjs';

import { AppHttpClient, HttpRequestConfig } from '@core/application/ports/http-client.abstract';

@Injectable({ providedIn: 'root' })
export class AxiosHttpClient extends AppHttpClient {
  private readonly client: AxiosInstance = axios.create({
    baseURL: '/api',
    headers: { 'Content-Type': 'application/json' },
  });

  get<T>(url: string, config?: HttpRequestConfig): Observable<T> {
    return from(this.client.get<T>(url, config)).pipe(map((r) => r.data));
  }

  post<T>(url: string, body: unknown, config?: HttpRequestConfig): Observable<T> {
    return from(this.client.post<T>(url, body, config)).pipe(map((r) => r.data));
  }

  put<T>(url: string, body: unknown, config?: HttpRequestConfig): Observable<T> {
    return from(this.client.put<T>(url, body, config)).pipe(map((r) => r.data));
  }

  delete<T>(url: string, config?: HttpRequestConfig): Observable<T> {
    return from(this.client.delete<T>(url, config)).pipe(map((r) => r.data));
  }
}
