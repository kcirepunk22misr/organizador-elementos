import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Inventory } from 'src/app/interfaces/interfaces';
import { HerramientasService } from 'src/app/services/herramientas.service';

@Component({
  selector: 'app-listar-herramientas',
  templateUrl: './listar-herramientas.component.html',
  styleUrls: ['./listar-herramientas.component.css'],
})
export class ListarHerramientasComponent implements OnInit {
  inventorys: Inventory[] = [];
  @Output() inventarios: EventEmitter<Inventory>;

  constructor(private _herramientaSevice: HerramientasService) {
    this.inventarios = new EventEmitter();
  }

  ngOnInit(): void {
    this.getTools();
  }

  getTools() {
    this._herramientaSevice.getInventorys().subscribe((resp) => {
      this.inventorys.push(...resp.inventaios);
    });
  }

  guardarHerramienta(inventory: Inventory) {
    console.log(inventory);
    this.inventarios.emit(inventory);
  }
}
