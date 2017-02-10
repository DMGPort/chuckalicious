import { Component, OnInit } from '@angular/core';
import { UniversalService } from '../universal.service';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.css'],
})
export class GameTabsComponent implements OnInit {
  constructor(
    private universalService: UniversalService
  ) {}

  ngOnInit() {
  }

}
