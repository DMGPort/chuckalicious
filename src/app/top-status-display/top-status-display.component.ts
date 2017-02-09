import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-top-status-display',
  templateUrl: './top-status-display.component.html',
  styleUrls: ['./top-status-display.component.css']
})
export class TopStatusDisplayComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
  }
  
  openLogin(){
    this.dialogService.openLoginDialog();
  }

  logout(){
    this.accountService.logout();
  }
}
