import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PrestamosService } from '../../services/prestamos.service';
import { ActivatedRoute } from '@angular/router';
import { Lender } from '../../interfaces/interfaces';
import { NgForm } from '@angular/forms';
import { LenderService } from '../../services/lender.service';
import { OnDestroy } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recibo-prestamos',
  templateUrl: './recibo-prestamos.component.html',
  styleUrls: ['./recibo-prestamos.component.css'],
})
export class ReciboPrestamosComponent implements OnInit, OnDestroy {
  lender: Lender;
  inventory: any[];
  entrega: Array<string> = [];
  total: number = 0;
  lenderId: string;
  error: string;

  @ViewChild('recibo') recibo: ElementRef;

  constructor(
    private _prestamoService: PrestamosService,
    private _activateRoute: ActivatedRoute,
    private _lenderService: LenderService
  ) {
    this.lenderId = this._activateRoute.snapshot.paramMap.get('id');
    this.lender = {
      _id: '',
      name: 'Sin Nombre',
      surname: 'Sin Apellido',
      number: 0,
      organization: 'Sin Organizacion',
      email: 'sincorreo@gmail.com',
    };
  }

  ngOnInit(): void {
    this.getLenderToolById();
    this.getLender();
  }

  ngOnDestroy() {
    this.getLenderToolById().unsubscribe();
    this.getLender().unsubscribe();
    this.herramientaSeleccionadas().unsubscribe();
  }

  getLender() {
    return this._lenderService
      .getLenderById(this.lenderId)
      .subscribe((resp) => {
        this.lender = resp;
      });
  }

  getLenderToolById() {
    return this._prestamoService.toolLenderById(this.lenderId).subscribe(
      (resp: any) => {
        this.inventory = resp.lenderTool;
        this.total = resp.lenderTool.length;
      },
      (err) => {
        this.error = err.error.message;
      }
    );
  }

  todoOk(f: NgForm) {
    console.log(f.value);
  }

  toogleOk(id: string) {
    let recibo = document.querySelector('#recibo' + id);
    recibo.classList.toggle('bien');

    let posicion = this.entrega.indexOf(id);
    if (posicion === -1) {
      this.entrega.push(id);
    } else {
      this.entrega.splice(posicion, 1);
    }
  }

  herramientaSeleccionadas() {
    return this._prestamoService
      .deleteSeleted({ inventarioId: this.entrega })
      .subscribe(() => {
        Swal.fire(
          'Herramienta devuelta!',
          `${this.lender.name} a devuelto la la herramienta`,
          'success'
        );

        this.entrega = [];
        this.ngOnInit();
      });
  }

  entregarHerramienta() {
    return this._prestamoService.deleteAll(this.lenderId).subscribe(() => {
      Swal.fire(
        'Herramienta devuelta!',
        `${this.lender.name} a devuelto la la herramienta`,
        'success'
      );
      this.ngOnInit();
    });
  }
}
