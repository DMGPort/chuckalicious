import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';

import { LoginComponent } from './login/login.component';

@Injectable()
export class AccountService {

  constructor(
    private dialog: MdDialog
  ) { }

  openLoginDialog(){
    this.dialog.open(LoginComponent);
  }
  
}
