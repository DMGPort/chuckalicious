import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
//Firebase
import { AngularFireModule } from 'angularfire2';
import { FirebaseConfig, FirebaseAuthGoogleConfig } from './firebase-config';
//Services
import { AppRoutingModule, appRoutingProviders } from './app-routing.module';
import { AccountService } from './account.service';
import { DialogService } from './dialog.service';

import { LoginComponent } from './login/login.component';
import { DynoDialogComponent } from './dyno-dialog/dyno-dialog.component';
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
    GameGridComponent,
    LoginComponent,
    DynoDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(FirebaseConfig, FirebaseAuthGoogleConfig),
    AppRoutingModule
  ],
  providers: [ appRoutingProviders, AccountService, DialogService ],
  bootstrap: [ AppComponent ],
  entryComponents: [
    LoginComponent,
    DynoDialogComponent
  ]
})
export class AppModule { }
