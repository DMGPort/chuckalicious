import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
//Services

import { AppComponent } from './app.component';
import { DrawCardComponent } from './draw-card/draw-card.component';
import { TopStatusDisplayComponent } from './top-status-display/top-status-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawCardComponent,
    TopStatusDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
