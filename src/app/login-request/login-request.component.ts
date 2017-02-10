import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-login-request',
  templateUrl: './login-request.component.html',
  styleUrls: ['./login-request.component.css']
})
export class LoginRequestComponent implements OnInit {

  constructor(
    private dialog: MdDialog
  ) { }

  ngOnInit() {
  }
  
  openLogin(){
    this.dialog.closeAll();
    this.dialog.open(LoginComponent);
  }
}
