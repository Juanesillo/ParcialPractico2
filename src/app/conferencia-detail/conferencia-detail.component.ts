import { Component, Input, OnInit } from '@angular/core';
import { Conferencia } from '../conferencia/conferencia';
@Component({
  selector: 'app-conferencia-detail',
  templateUrl: './conferencia-detail.component.html',
  standalone: false,
  styleUrls: ['./conferencia-detail.component.css']
})
export class ConferenciaDetailComponent implements OnInit {
  @Input() Conferencia!: Conferencia;
  selectedConferencia!: Conferencia;
  selected = false;
  constructor() { }
  onSelected(conferencia: Conferencia): void {
    this.selected = true;
    this.selectedConferencia = conferencia;
  }
  ngOnInit() {
  }

}
