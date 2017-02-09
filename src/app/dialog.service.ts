import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';

import { DynoDialogComponent } from './dyno-dialog/dyno-dialog.component';
import { LoginComponent } from './login/login.component';

@Injectable()
export class DialogService {

  constructor(
    private dialog: MdDialog
  ) { }
  
  openLoginDialog(){
    this.dialog.open(LoginComponent);
  }

  openDynoDialog(){
    this.dialog.open(DynoDialogComponent)
  }

}
