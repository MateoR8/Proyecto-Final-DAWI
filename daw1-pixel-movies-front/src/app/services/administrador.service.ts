import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Administrador } from '../models/administrador';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http : HttpClient) { }

  private urlLogin = 'http://localhost:8080/api/acceso/login';

  loginAdministrador(request: Administrador): Observable<any> {
    return this.http.post<any>(this.urlLogin, request);
  }}
