import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.css'],
})
export class ModalImageComponent implements OnInit {
  @Input() id: string;
  @Input() name: string;
  @Input() img: string;

  constructor() {}

  ngOnInit(): void {}
}
