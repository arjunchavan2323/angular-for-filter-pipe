import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { sumarypipe } from './shared/component/sumary.pipe';

import { FormsModule } from '@angular/forms';
import { DemoPipe } from './demo.pipe';


@NgModule({
  declarations: [
    AppComponent,
    sumarypipe,
    DemoPipe
   
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
