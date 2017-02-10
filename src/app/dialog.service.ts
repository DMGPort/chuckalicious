import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';

import { DynoDialogComponent } from './dyno-dialog/dyno-dialog.component';
import { LoginComponent } from './login/login.component';
import { LoginRequestComponent } from './login-request/login-request.component';

@Injectable()
export class DialogService {

  constructor(
    private dialog: MdDialog
  ) { }
  
  openLoginDialog(){
    this.dialog.open(LoginComponent);
  }

  openLoginPrompt(){
    this.dialog.open(LoginRequestComponent);
  }


  openDynoDialog(){
    this.dialog.open(DynoDialogComponent)
  }

}
