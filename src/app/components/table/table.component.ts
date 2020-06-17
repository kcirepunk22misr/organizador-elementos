import { Component, OnInit, OnDestroy } from '@angular/core';
import { HerramientasService } from '../../services/herramientas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [HerramientasService],
})
export class TableComponent implements OnInit, OnDestroy {
  inventarios = [];

  constructor(private _herramientasService: HerramientasService) {}

  ngOnInit(): void {
    this.getInventorys();
  }

  ngOnDestroy() {
    this.getInventorys().unsubscribe();
  }

  getInventorys() {
    return this._herramientasService.getInventorys().subscribe((resp) => {
      this.inventarios.push(...resp.inventaios);
    });
  }

  delete(id: string) {
    Swal.fire({
      title: '¿Estas Seguro?',
      text: '¿Estas seguro que deseas eliminarlo?, no podras recuperarlo',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this._herramientasService.deleteInventory(id).subscribe((resp: any) => {
          Swal.fire(
            'Borrado Exitosamente',
            `${resp.inventory.name} Borrado`,
            'success'
          );
        });
      }
    });
  }
}
