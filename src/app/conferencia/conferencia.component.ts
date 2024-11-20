import { Component, OnInit } from '@angular/core';
import { Conferencia } from './conferencia';
import { ConferenicaService } from './conferencia.service';

@Component({
  selector: 'app-conferencia',
  templateUrl: './conferencia.component.html',
  standalone: false,
  styleUrls: ['./conferencia.component.css']
})
export class ConferenciaComponent implements OnInit {

  selectedConferencia!: Conferencia;
  selected = false;

  constructor(private conferenciaservice:ConferenicaService) { }
  conferencias: Array<Conferencia>=[];
  getConferencias(){
  this.conferenciaservice.getConferencias().subscribe(conferencias=>{this.conferencias=conferencias});
}

onSelected(conferencia: Conferencia): void {
  this.selected = true;
  this.selectedConferencia = conferencia;
}

  
  ngOnInit() {
    this.getConferencias();
  }

}
