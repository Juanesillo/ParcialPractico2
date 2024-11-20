import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Conferencia } from './conferencia';
@Injectable({
  providedIn: 'root'
})
export class ConferenicaService {
  private apiUrl = environment.baseUrl + 'conferences.json';

constructor(private http: HttpClient) { }

getConferencias(): Observable<Conferencia[]> {
  return this.http.get<Conferencia[]>(this.apiUrl);
}

}
