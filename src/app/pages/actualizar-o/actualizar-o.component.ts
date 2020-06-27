import { Component, OnInit, OnDestroy } from '@angular/core';
import { HerramientasService } from '../../services/herramientas.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { InventoryModel } from '../../models/Inventory.model';
import { Inventory, Properties } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-o',
  templateUrl: './actualizar-o.component.html',
  styleUrls: ['./actualizar-o.component.css'],
  providers: [HerramientasService],
})
export class ActualizarOComponent implements OnInit, OnDestroy {
  private id: string;
  public inventory: Inventory;
  groups: Properties[];
  types: Properties[];
  marcas: Properties[];
  colors: Properties[];
  sizes: Properties[];
  states: Properties[];
  showcases: Properties[];
  rows: Properties[];
  columns: Properties[];
  image: File;
  eror: string;

  constructor(
    private _herramientasService: HerramientasService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.inventory = new InventoryModel(
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      0,
      null
    );
  }

  ngOnInit(): void {
    this.getInventoryById();
    this.getProperties();
  }

  ngOnDestroy() {
    this.getProperties().unsubscribe();
    this.getInventoryById().unsubscribe();
  }

  getInventoryById() {
    return this._herramientasService
      .getInventoryById(this.id)
      .subscribe((resp) => {
        this.inventory = resp.inventario;
      });
  }

  getProperties() {
    return this._herramientasService
      .getAllProperties()
      .subscribe((resp: any) => {
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

  actualizar(f: NgForm) {
    if (this.image !== undefined) {
      this._herramientasService
        .uploadImage(this.image)
        .then((resp) => {
          this._herramientasService
            .updateInventory(this.inventory._id, {
              img: resp.secure_url,
            })
            .subscribe((respImage: any) => {
              this.ngOnInit();
              Swal.fire(
                'Guardado Exitosamente',
                `Agregago a la tabla`,
                'success'
              );
            });
          Swal.fire('Actualizado Correctamente', '', 'success');
        })
        .catch((err) => {
          if (err) {
            this.eror = 'ERROR AL ACTUALIZAR LA IMAGEN!!!';
          }
        });
    } else {
      return this._herramientasService
        .updateInventory(this.inventory._id, f.value)
        .subscribe(() => {
          Swal.fire('Actualizado Correctamente', '', 'success');
        });
    }
  }
}
