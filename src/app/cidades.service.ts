import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cidade } from './cidades';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  url = 'http://localhost:3000/cidades';

  constructor(private http: HttpClient) { }

  getCidades(): Observable<cidade[]> {
    return this.http.get<cidade[]>(this.url);
  }

  getCidadeById(id: number): Observable<cidade> {
    return this.http.get<cidade>(`${this.url}/${id}`);
  }

  delete(cidade: cidade): Observable<void> {
    return this.http.delete<void>(`${this.url}/${cidade.id}`);
  }

  update(cidade: cidade): Observable<cidade> {
    return this.http.put<cidade>(`${this.url}/${cidade.id}`, cidade);
  }

  save(cidade: cidade): Observable<cidade> {
    return this.http.post<cidade>(this.url, cidade);
  }
}
