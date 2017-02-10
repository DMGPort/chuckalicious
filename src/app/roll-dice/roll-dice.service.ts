import { Injectable } from '@angular/core';

@Injectable()
export class RollDiceService {

  constructor() { }

  pDice: string;
  pNumber: number;
  cDice: string;
  cNumber: number;
  
  tDice: string;

  rollDice(){
    this.pNumber = this.getRandomNumber(1,6);
    this.pDice = this.checkRoll(this.pNumber);
    this.cNumber = this.getRandomNumber(2,8);
    this.cDice = this.checkRoll(this.cNumber);
    this.scrambleDice(4)
  }

  scrambleDice(int: number){
      console.log(int)
      int--;           
      if (int > 0) {  
        setTimeout(() =>{
           this.scrambleDice(int);  
        }  , 300)              //  ..  setTimeout()
   
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
      if(number == 8){
        return " eight";
      }
      if(number == 9){
        return " nine";
      }
  }
}
