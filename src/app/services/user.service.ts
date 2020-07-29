import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../interfaces/interfaces';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private URL = environment.url;
  public user: User;
  public token: string;

  constructor(private _http: HttpClient, private router: Router) {
    this.cargarStorage();
  }

  registrarUsuario(user) {
    return this._http.post(`${this.URL}/user`, user);
  }

  estaLogueado() {
    return this.token.length > 5 ? true : false;
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse(localStorage.getItem('user'));
    } else {
      this.token = '';
      this.user = null;
    }
  }

  guardarStorage(id: string, token: string, user: User) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    this.user = user;
    this.token = token;
  }

  login(user: { email: string; password: string }) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    let body = JSON.stringify(user);

    return this._http.post(`${this.URL}/login`, body, { headers }).pipe(
      map((resp: any) => {
        this.guardarStorage(resp.user._id, resp.token, resp.user);
        return true;
      })
    );
  }

  logout() {
    this.user = null;
    this.token = '';

    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    window.location.reload();
  }
}
