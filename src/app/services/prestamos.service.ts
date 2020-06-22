import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Inventory } from '../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PrestamosService {
  private emitChangeSource = new Subject<Inventory>();
  changeEmited$ = this.emitChangeSource.asObservable();
  constructor() {}

  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }
}
