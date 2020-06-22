import { Component, OnInit } from '@angular/core';
import { Lender } from '../interfaces/interfaces';
import { LenderService } from '../services/lender.service';

@Component({
  selector: 'app-prestamos-home',
  templateUrl: './prestamos-home.component.html',
})
export class PrestamosHomeComponent implements OnInit {
  lenders: Lender[] = [];

  constructor(private _lenderService: LenderService) {}

  ngOnInit() {
    this.getLender();
  }

  getLender() {
    this._lenderService.getLender().subscribe((resp) => {
      this.lenders.push(...resp);
    });
  }

  prueba(e) {
    console.log(e);
  }
}
