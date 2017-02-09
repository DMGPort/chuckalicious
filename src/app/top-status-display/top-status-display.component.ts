import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-top-status-display',
  templateUrl: './top-status-display.component.html',
  styleUrls: ['./top-status-display.component.css']
})
export class TopStatusDisplayComponent implements OnInit {

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }
  
  openLogin(){
    this.accountService.openLoginDialog();
  }
}
