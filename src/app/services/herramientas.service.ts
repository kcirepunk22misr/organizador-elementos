import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Inventory, RespInventory } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class HerramientasService {
  private URL = environment.url;

  constructor(private _http: HttpClient) {}

  getInventorys(): Observable<any> {
    return this._http.get<Inventory>(`${this.URL}/inventorys`);
  }

  getInventoryById(id: string): Observable<RespInventory> {
    return this._http.get<RespInventory>(`${this.URL}/inventory/${id}`);
  }

  getAllProperties() {
    return this._http.get(`${this.URL}/properties`);
  }

  saveInventory(inventario: Inventory): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    let body = JSON.stringify(inventario);

    return this._http.post(`${this.URL}/inventory`, body, { headers });
  }

  updateInventory(id: string, inventario: any | Inventory) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    let body = JSON.stringify(inventario);

    return this._http.put(`${this.URL}/inventory/${id}`, body, { headers });
  }

  deleteInventory(id: string) {
    return this._http.delete(`${this.URL}/inventory/${id}`);
  }

  async uploadImage(file: File) {
    let formData = new FormData();
    formData.append('upload_preset', 'bmqfy9iw');
    formData.append('file', file);

    try {
      const resp = await fetch(
        'https://api.cloudinary.com/v1_1/dwalr0wvh/upload',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (resp.ok) {
        return resp.json();
      } else {
        throw await resp.json();
      }
    } catch (err) {
      throw err;
    }
  }

  saveProperties(params: string, propiedad: string) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    let body = JSON.stringify(propiedad);

    return this._http.post(`${this.URL}/properties/${params}`, body, {
      headers,
    });
  }

  search(busqueda: string) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    let busquedaURl = encodeURI(busqueda);
    return this._http.get(`${this.URL}/inventorys/${busquedaURl}`, { headers });
  }

  addReport(report) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    let body = JSON.stringify(report);

    return this._http.post(`${this.URL}/report`, body, { headers });
  }

  deleteProperties(tipo: string, id: string) {
    return this._http.delete(`${this.URL}/properties/${tipo}/${id}`);
  }
}
