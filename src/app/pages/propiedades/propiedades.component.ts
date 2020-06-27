import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HerramientasService } from '../../services/herramientas.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css'],
})
export class PropiedadesComponent implements OnInit {
  propiedades: any[] = [
    { name: 'Tipo', url: 'type' },
    { name: 'Grupo', url: 'group' },
    { name: 'Marca', url: 'marca' },
    { name: 'Estado', url: 'state' },
    { name: 'Tamaño', url: 'size' },
    { name: 'Color', url: 'color' },
    { name: 'Escaparate', url: 'showcase' },
    { name: 'Fila', url: 'row' },
    { name: 'Column', url: 'column' },
  ];

  urlPropiead: string;
  ok: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _herramientasService: HerramientasService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((resp) => {
      this.urlPropiead = resp.propiedad;
    });
  }

  propiedadUrl(propiedad) {
    console.log(propiedad.target.value);
    this.router.navigate(['/propiedades', propiedad.target.value]);
  }

  guardar(f: NgForm) {
    this._herramientasService
      .saveProperties(this.urlPropiead, f.value)
      .subscribe(
        (resp: any) => {
          if (resp.ok) {
            this.ok = true;
            f.reset();
            setTimeout(() => {
              this.ok = false;
            }, 5000);
          }
        },
        (err) => {
          this.ok = false;
        }
      );
  }
}
