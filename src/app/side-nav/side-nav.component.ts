import { Component, OnInit } from '@angular/core';
import { UniversalService } from '../universal.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(
    private universalService: UniversalService
  ) { }

  ngOnInit() {
  }

  setDraw(){
    this.universalService.gameIndex = '0';
  }
  
  setDice(){
    this.universalService.gameIndex = '1';    
  }

}
