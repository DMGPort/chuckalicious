import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
//Services
import { DrawCardService } from './draw-card.service';

import { AppComponent } from './app.component';
import { DrawCardComponent } from './draw-card/draw-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [ DrawCardService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
