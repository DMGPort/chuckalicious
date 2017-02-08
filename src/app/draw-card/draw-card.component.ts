import { Component, OnInit } from '@angular/core';
import { DrawCardService } from './draw-card.service';

@Component({
  selector: 'app-draw-card',
  templateUrl: './draw-card.component.html',
  styleUrls: ['./draw-card.component.css'],
  providers: [ DrawCardService ]
})
export class DrawCardComponent implements OnInit {

  constructor(
    private drawCardService: DrawCardService
  ) { }

  ngOnInit() {
  }

  playerStarts(){
    this.drawCardService.playerDraws();
  }
  chuckStarts(){
    this.drawCardService.chuckDraws();
  }
  
}
