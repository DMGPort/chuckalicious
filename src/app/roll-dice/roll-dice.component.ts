import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { RollDiceService } from './roll-dice.service';

@Component({
  selector: 'app-roll-dice',
  templateUrl: './roll-dice.component.html',
  styleUrls: ['./roll-dice.component.css'],
  providers: [ RollDiceService ]
})
export class RollDiceComponent implements OnInit {

  constructor(
    private rollDiceService: RollDiceService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }
  
  rollDice(){
    this.rollDiceService.rollDice();
  }

}
