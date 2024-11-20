import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenciaComponent } from './conferencia.component';
import { ConferenciaDetailComponent } from '../conferencia-detail/conferencia-detail.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConferenciaComponent,ConferenciaDetailComponent],
  exports: [ConferenciaComponent]
})
export class ConferenciaModule { }
