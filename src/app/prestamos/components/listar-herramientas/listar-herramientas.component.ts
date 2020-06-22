import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Inventory } from 'src/app/interfaces/interfaces';
import { HerramientasService } from 'src/app/services/herramientas.service';
import { PrestamosService } from 'src/app/services/prestamos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-herramientas',
  templateUrl: './listar-herramientas.component.html',
  styleUrls: ['./listar-herramientas.component.css'],
})
export class ListarHerramientasComponent implements OnInit {
  inventorys: Inventory[] = [];
  @Output() inventarios: EventEmitter<Inventory>;

  constructor(
    private _herramientaSevice: HerramientasService,
    private _prestarService: PrestamosService,
    private _activateRoute: ActivatedRoute
  ) {
    this.inventarios = new EventEmitter();
  }

  ngOnInit(): void {
    this.getTools();
    this._activateRoute.params.subscribe((params) => {
      this._prestarService.emitChange(params['id']);
    });
  }

  getTools() {
    this._herramientaSevice.getInventorys().subscribe((resp) => {
      this.inventorys.push(...resp.inventaios);
    });
  }

  guardarHerramienta(inventory: Inventory) {
    this._prestarService.emitChange(inventory);
  }
}
