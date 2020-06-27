import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  DoCheck,
} from '@angular/core';
import { Inventory } from 'src/app/interfaces/interfaces';
import { HerramientasService } from 'src/app/services/herramientas.service';
import { PrestamosService } from 'src/app/services/prestamos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-herramientas',
  templateUrl: './listar-herramientas.component.html',
  styleUrls: ['./listar-herramientas.component.css'],
})
export class ListarHerramientasComponent implements OnInit, DoCheck {
  inventorys: Inventory[] = [];
  id: string;
  inventoryExists: Array<string> = [];

  constructor(
    private _herramientaSevice: HerramientasService,
    private _prestarService: PrestamosService,
    private _activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getTools();
    this._activateRoute.params.subscribe((params) => {
      this.id = params['id'];
      this._prestarService.emitChange(this.id);
    });
    this.getLenderToolById();
  }
  ngDoCheck() {
    this.getLenderToolById();
  }

  getTools() {
    this._herramientaSevice.getInventorys().subscribe((resp) => {
      this.inventorys = [];
      this.inventorys.push(...resp.inventaios);
    });
  }

  guardarHerramienta(inventory: Inventory) {
    this._prestarService.emitChange(inventory);
  }

  search(search) {
    if (search.value.length <= 0) {
      this.getTools();
      return;
    }

    return this._herramientaSevice
      .search(search.value)
      .subscribe((resp: any) => {
        this.inventorys = [];
        this.inventorys.push(...resp.inventario);
      });
  }

  getLenderToolById() {
    return this._prestarService
      .toolLenderById(this.id)
      .subscribe((resp: any) => {
        this.inventoryExists = [];
        for (let existe of resp.lenderTool) {
          this.inventoryExists.push(existe.inventarioId._id);
        }
      });
  }

  verifyInventoryExists(id: string) {
    if (this.inventoryExists.indexOf(id) === -1) {
      return false;
    } else {
      return true;
    }
  }
}
