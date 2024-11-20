import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { ConferenciaModule } from './conferencia/conferencia.module';
import { ConferenciaDetailComponent } from './conferencia-detail/conferencia-detail.component';


@NgModule({
   declarations: [		
      AppComponent,
   ],
   imports: [
      BrowserModule,
      ConferenciaModule,
      HttpClientModule

   ],
   providers: [],
   bootstrap: [
    AppComponent
 ]
})
export class AppModule { }