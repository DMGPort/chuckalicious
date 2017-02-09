import { Injectable } from '@angular/core';
import { AccountService } from '../account.service';

@Injectable()
export class DrawCardService {

  constructor(
    private accountService: AccountService
  ) { }

  inPlay = false;
  joke: string = "";
  chuckFlip:string = "back";
  cSuit:string = "";
  cRank:string = "";
  cCard:string = this.chuckFlip + this.cSuit + this.cRank;
  cSuitNumber:number;
  cRankNumber:number;

  playerFlip:string = "back";
  pSuit:string = "";
  pRank:string = "";
  pCard:string = this.playerFlip + this.pSuit + this.pRank;
  pSuitNumber:number;
  pRankNumber:number;

  playerDraws(){
    this.inPlay = true;
    this.cCard = "back";
    this.pCard = "back";
      setTimeout(() => {
        //Get Player Card
        this.pSuitNumber = this.getRandomNumber(4, 1);
        this.pSuit = this.checkSuit(this.pSuitNumber);
        this.pRankNumber = this.getRandomNumber(2, 13);
        this.pRank = this.checkRank(this.pRankNumber);
        this.playerFlip = "card";      
        this.pCard = this.playerFlip + this.pSuit + this.pRank;    
        setTimeout(() =>{
          //Get Players Card
          this.cSuitNumber = this.getRandomNumber(4, 1);
          this.cSuit = this.checkSuit(this.cSuitNumber);
          this.cRankNumber = this.getRandomNumber(3, 14);          
          while(this.cRankNumber <= this.pRankNumber ){
            this.cRankNumber = this.getRandomNumber(3, 14);
          }
          this.cRank = this.checkRank(this.cRankNumber);
          this.chuckFlip = "card";      
          this.cCard = this.chuckFlip + this.cSuit + this.cRank;    
          this.inPlay = false;
        }, 300)
      },400)
  }
  chuckDraws(){
    this.inPlay = true;    
    this.cCard = "back";
    this.pCard = "back";
      setTimeout(() => {
        //Get Chucks Card
        this.cSuitNumber = this.getRandomNumber(4, 1);
        this.cSuit = this.checkSuit(this.cSuitNumber);
        this.cRankNumber = this.getRandomNumber(3, 14);
        this.cRank = this.checkRank(this.cRankNumber);
        this.chuckFlip = "card";      
        this.cCard = this.chuckFlip + this.cSuit + this.cRank;    
        setTimeout(() =>{
          //Get Players Card
          this.pSuitNumber = this.getRandomNumber(4, 1);
          this.pSuit = this.checkSuit(this.pSuitNumber);
          this.pRankNumber = this.getRandomNumber(2, 13);          
          while(this.pRankNumber >= this.cRankNumber ){
            this.pRankNumber = this.getRandomNumber(2, 13);
          }
          this.pRank = this.checkRank(this.pRankNumber);
          this.playerFlip = "card";      
          this.pCard = this.playerFlip + this.pSuit + this.pRank;    
          this.inPlay = false;
        }, 300)
      },400)
  }

  getRandomNumber(min, max){
    return Math.round(Math.random() * (max - min) + min);
  }

  checkSuit(suitNumber){
      if(suitNumber == 1){
        return " heart";
      }
      if(suitNumber == 2){
        return " spade";
      }
      if(suitNumber == 3){
        return " diamond";
      }
      if(suitNumber == 4){
        return " club";
      }
  }
  
  checkRank(number){
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
      if(number == 10){
        return " ten";
      }
      if(number == 11){
        return " jack";
      }
      if(number == 12){
        return " queen";
      }
      if(number == 13){
        return " king";
      }
      if(number == 14){
        return " ace";
      }
  }

}