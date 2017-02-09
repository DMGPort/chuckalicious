import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
//Services
import { AppRoutingModule, appRoutingProviders } from './app-routing.module';

import { AppComponent } from './app.component';
import { DrawCardComponent } from './draw-card/draw-card.component';
import { TopStatusDisplayComponent } from './top-status-display/top-status-display.component';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { GameGridComponent } from './game-grid/game-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawCardComponent,
    TopStatusDisplayComponent,
    HomeComponent,
    SideNavComponent,
    GameGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
