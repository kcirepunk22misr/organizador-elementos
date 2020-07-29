import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HerramientasService } from '../../services/herramientas.service';
import { Properties } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-propiedad',
  templateUrl: './delete-propiedad.component.html',
  styleUrls: ['./delete-propiedad.component.css'],
})
export class DeletePropiedadComponent implements OnInit, OnDestroy {
  propiedades: { name: string; url: string }[] = [
    { name: 'Tipo', url: 'type' },
    { name: 'Grupo', url: 'group' },
    { name: 'Marca', url: 'marca' },
    { name: 'Estado', url: 'state' },
    { name: 'Tamaño', url: 'size' },
    { name: 'Color', url: 'color' },
    { name: 'Escaparate', url: 'showcase' },
    { name: 'Fila', url: 'row' },
    { name: 'Columna', url: 'column' },
  ];

  groups: Properties[];
  types: Properties[];
  marcas: Properties[];
  colors: Properties[];
  sizes: Properties[];
  states: Properties[];
  showcases: Properties[];
  rows: Properties[];
  columns: Properties[];
  urlPropiedad: string;
  propiedad: Properties[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _herramientaService: HerramientasService
  ) {}

  ngOnInit(): void {
    this.getIdPropiedades();
    this.getProperties();
  }

  ngOnDestroy() {
    this.getIdPropiedades().unsubscribe();
    this.borrarProperties(0).unsubscribe();
  }

  getIdPropiedades() {
    return this.activatedRoute.params.subscribe((resp) => {
      this.urlPropiedad = resp.propiedad;
    });
  }

  verificarUrl(tipo: string) {
    switch (tipo) {
      case 'type':
        this.propiedad = this.types;
        break;
      case 'group':
        this.propiedad = this.groups;
        break;
      case 'marca':
        this.propiedad = this.marcas;
        break;
      case 'state':
        this.propiedad = this.states;
        break;
      case 'size':
        this.propiedad = this.sizes;
        break;
      case 'color':
        this.propiedad = this.colors;
        break;
      case 'showcase':
        this.propiedad = this.showcases;
        break;
      case 'row':
        this.propiedad = this.rows;
        break;
      case 'column':
        this.propiedad = this.columns;
        break;
    }
  }

  propiedadUrl(propiedad) {
    this.router.navigate(['/delete-propiedades', propiedad.target.value]);
    this.verificarUrl(propiedad.target.value);
  }

  getProperties() {
    return this._herramientaService
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
        this.verificarUrl(this.urlPropiedad);
      });
  }

  borrarProperties(id) {
    return this._herramientaService
      .deleteProperties(this.urlPropiedad, id)
      .subscribe(
        () => {
          Swal.fire({
            title: '¿Estas Seguro?',
            text: '¿Estas seguro que deseas eliminarlo?, no podras recuperarlo',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
          }).then((result) => {
            if (result.value) {
              this.getProperties();
            }
          });
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
