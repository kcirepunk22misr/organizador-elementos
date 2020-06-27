import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Inventory } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PrestamosService {
  private URL = environment.url;
  private emitChangeSource = new Subject<Inventory>();
  changeEmited$ = this.emitChangeSource.asObservable();
  constructor(private _http: HttpClient) {}

  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }

  toolLenderById(id: string) {
    return this._http.get(`${this.URL}/lender-tool/${id}`);
  }

  deleteSeleted(inventariosId: any) {
    return this._http.post(`${this.URL}/lender-tool`, inventariosId);
  }

  deleteAll(id: string) {
    return this._http.delete(`${this.URL}/lender-tool-all/${id}`);
  }
}
