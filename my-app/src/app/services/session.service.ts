// services/session.service.ts
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private apiUrl = `${environment.apiUrl}/api/sessions`;
  constructor(private http: HttpClient) {}

  createSession(sessionData: { email: string, lat: number, lng: number, timezone: string}) {
    return this.http.post(`${this.apiUrl}`, sessionData);
  }

  getSessionData(email: string): Observable<any> {
    let params = new HttpParams().set('email', email);
    return this.http.get<any>(`${this.apiUrl}/latest`, { params: params });
  }
  
  getUserSessions(email: string): Observable<any[]> {
    let params = new HttpParams().set('email', email);
    return this.http.get<any[]>(`${this.apiUrl}/user`, { params: params });
  }

  roundToUnit(value: number): number {
    return Math.round(value);
  }
}
