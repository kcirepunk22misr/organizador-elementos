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

  actualizar(f: NgForm) {
    this._herramientasService
      .updateInventory(this.inventory._id, f.value)
      .subscribe(() => {
        Swal.fire('Actualizado Correctamente', '', 'success');
      });
  }
}
