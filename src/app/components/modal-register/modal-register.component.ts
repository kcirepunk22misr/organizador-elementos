import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HerramientasService } from '../../services/herramientas.service';
import { Properties } from '../../interfaces/interfaces';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.css'],
  providers: [HerramientasService],
})
export class ModalRegisterComponent implements OnInit {
  groups: Properties[];
  types: Properties[];
  marcas: Properties[];
  colors: Properties[];
  sizes: Properties[];
  states: Properties[];
  showcases: Properties[];
  rows: Properties[];
  columns: Properties[];

  num: number = 1;
  image: File;

  constructor(private _herramientasService: HerramientasService) {}

  ngOnInit(): void {}

  AumentarAndDecrementar(numero: number) {
    if (numero === -1) {
      this.num--;
    }

    if (numero === 1) {
      this.num++;
    }

    if (this.num < 1) {
      this.num = 1;
    }
  }

  getProperties() {
    this._herramientasService.getAllProperties().subscribe((resp: any) => {
      this.groups = resp.groups.groups;
      this.types = resp.types.types;
      this.marcas = resp.marcas.marcas;
      this.colors = resp.colors.colors;
      this.sizes = resp.sizes.sizes;
      this.states = resp.states.states;
      this.showcases = resp.showcases.showcases;
      this.rows = resp.rows.rows;
      this.columns = resp.columns.columns;
    });
  }

  uploadImage(e) {
    this.image = e.target.files[0];
  }

  guardar(f: NgForm) {
    if (f.invalid) {
      Object.values(f.controls).forEach((control) => {
        control.markAsTouched();
      });
      return;
    }

    this._herramientasService
      .saveInventory(f.value)
      .subscribe((respInventory) => {
        if (this.image !== undefined) {
          this._herramientasService.uploadImage(this.image).then((resp) => {
            this.image = undefined;
            this._herramientasService
              .updateInventory(respInventory.inventory._id, {
                img: resp.secure_url,
              })
              .subscribe((respImage) => {
                Swal.fire(
                  'Guardado Exitosamente',
                  `Agregado a la tabla`,
                  'success'
                );
                f.reset();
              });
          });
        } else {
          Swal.fire('Guardado Exitosamente', `Agregado a la tabla`, 'success');
          f.reset();
        }
      });
  }
}
