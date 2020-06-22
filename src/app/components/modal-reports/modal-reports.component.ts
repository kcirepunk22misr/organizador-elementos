import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HerramientasService } from '../../services/herramientas.service';

@Component({
  selector: 'app-modal-reports',
  templateUrl: './modal-reports.component.html',
  styleUrls: ['./modal-reports.component.css'],
})
export class ModalReportsComponent implements OnInit {
  @Input() id: string;
  @Input() name: string;
  @Input() img: string;
  @Input() reports: Array<any>;

  report: boolean = true;

  constructor(private _herramientaServices: HerramientasService) {}

  ngOnInit(): void {}

  guardar(f: NgForm) {
    let reports = {
      userId: localStorage.getItem('id'),
      description: f.value.description,
      inventoryId: this.id,
    };

    this._herramientaServices.addReport(reports).subscribe((resp) => {
      console.log(resp);
    });
  }
}
