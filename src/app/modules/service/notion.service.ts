import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tasks } from '../types/tasks.types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotionService {
  private apiUrl = '/api/v1/notion/';

  constructor(private http: HttpClient) {}

  // Criar Task
  create(taskData: Tasks): Observable<any> {
    return this.http.post(`${this.apiUrl}/create/`, taskData);
  }

  find(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/buscar/${id}`);
  }

  //Atualizar Task
  update(id: string, taskData: Tasks): Observable<any> {
    return this.http.put(`${this.apiUrl}/atualizar/${id}`, taskData);
  }

  // Deletar Task
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete-task/${id}`);
  }

  // Encontrar todas as tasks
  findAll(page: number, pageSize: number): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get(`${this.apiUrl}/list`, { params });
  }
}
