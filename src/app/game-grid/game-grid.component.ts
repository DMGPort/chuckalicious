import { Component, OnInit } from '@angular/core';
import { UniversalService } from '../universal.service';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.css']
})
export class GameGridComponent implements OnInit {

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
