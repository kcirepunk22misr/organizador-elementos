import { Component, OnInit, DoCheck } from '@angular/core';
import { Lender, Inventory } from '../interfaces/interfaces';
import { LenderService } from '../services/lender.service';
import { PrestamosService } from '../services/prestamos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prestamos-home',
  templateUrl: './prestamos-home.component.html',
})
export class PrestamosHomeComponent implements OnInit, DoCheck {
  lenderById: Lender = {};
  lenderId: string;
  lenders: Lender[] = [];
  lenderPrestar: Inventory[] = [];

  constructor(
    private _lenderService: LenderService,
    private _prestamosService: PrestamosService,
    private _activatedRoute: ActivatedRoute
  ) {
    this._prestamosService.changeEmited$.subscribe((resp: any) => {
      if (typeof resp === 'string') {
        this.lenderId = resp;
        this.getLenderById(resp);
        this.lenderPrestar = [];
      }
      if (typeof resp === 'object') {
        this.lenderPrestar.push({ ...resp });
      }
    });
  }

  ngOnInit() {
    this.getLender();
  }

  ngDoCheck() {}

  getLender() {
    this._lenderService.getLender().subscribe((resp) => {
      this.lenders.push(...resp);
    });
  }

  getLenderById(id) {
    this._lenderService.getLenderById(id).subscribe((resp: any) => {
      this.lenderById = { ...resp };
    });
  }

  borrarPestrarHerramienta(id) {
    this.lenderPrestar = this.lenderPrestar.filter((inventario) => {
      return inventario._id !== id;
    });
  }

  prestarHerramienta() {
    let prestar = [];

    for (const presta of this.lenderPrestar) {
      let prestarTemp = {
        inventarioId: presta._id,
      };
      prestar.push(prestarTemp);
    }

    this._lenderService
      .prestarHerramienta(this.lenderId, { prestar: prestar })
      .subscribe(
        (resp) => {
          console.log(resp);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
