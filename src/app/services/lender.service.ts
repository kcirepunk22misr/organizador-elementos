import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lender } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LenderService {
  private URL = environment.url;

  constructor(private _http: HttpClient) {}

  getLender(): Observable<Lender[]> {
    return this._http.get<Lender>(`${this.URL}/lender`).pipe(
      map((resp: any) => {
        return resp.lender;
      })
    );
  }

  getLenderById(id: string): Observable<Lender> {
    return this._http.get<Lender>(`${this.URL}/lender/${id}`).pipe(
      map((resp: any) => {
        return resp.lender;
      })
    );
  }

  prestarHerramienta(lenderId: string, inventarioId) {
    return this._http.post(`${this.URL}/prestar/${lenderId}`, inventarioId);
  }
}
