import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JwtService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.server}/jwt`;
  }

  public get(): Observable<any> {
    return this.http.get<any>(this.url);
  }

}