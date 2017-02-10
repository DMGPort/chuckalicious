import { Injectable } from '@angular/core';

@Injectable()
export class RollDiceService {

  constructor() { }

  pDice: string;
  pNumber: number;
  cDice: string;
  cNumber: number;
  inPlay: boolean = false;

  rollDice(){
    this.inPlay = true;
    this.scrambleDice(18)
  }

  roll(){   
    this.pNumber = this.getRandomNumber(1,6);
    this.cNumber = this.getRandomNumber(2,6);
    if(this.pNumber >= this.cNumber){
      if(this.pNumber == 6){
        this.cNumber = 7;        
      }
      while(this.pNumber >= this.cNumber){
        this.cNumber = this.getRandomNumber(2,6);
      }
    }
    this.pDice = this.checkRoll(this.pNumber);
    this.cDice = this.checkRoll(this.cNumber);
  }

  scrambleDice(int: number){
      this.pDice = this.checkRoll(this.getRandomNumber(1,6));
      this.cDice = this.checkRoll(this.getRandomNumber(1,6));
      int--;           
      if (int > 0) {  
        setTimeout(() =>{
           this.scrambleDice(int);
        }  , 90) 
      }
      if (int == 0) {  
          this.roll();
          this.inPlay = false;
      }
  }

  getRandomNumber(min, max){
    return Math.round(Math.random() * (max - min) + min);
  }

  checkRoll(number){
      if(number == 1){
        return "";
      }
      if(number == 2){
        return " two";
      }
      if(number == 3){
        return " three";
      }
      if(number == 4){
        return " four";
      }
      if(number == 5){
        return " five";
      }
      if(number == 6){
        return " six";
      }
      if(number == 7){
        return " seven";
      }
  }
}
