import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roll-dice',
  templateUrl: './roll-dice.component.html',
  styleUrls: ['./roll-dice.component.css']
})
export class RollDiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  add(component, id, scope) {
    if (id !== "this") {
        component.roll(500, Math.random() * 6);
      }
    };

  roll = function (ms, nextValue) {
    var self = this;
    this.value = null;
    if (nextValue == undefined) {
        nextValue = Math.floor(Math.random() * 6 + 1);
    } else {
        nextValue = nextValue;
    }
    this.nextValue = Math.max(1, Math.min(6, nextValue >>> 0));
    this.timeoutHandle = setTimeout(function () {
        self.value = self.nextValue;
        self.timeoutHandle = null;
    }, ms);
    this.period = ms;
    requestAnimationFrame(function () {
        self.draw();
    });
  };
  draw = function () {
    var self = this;
    var roller = self.scope.components.roller.actualNode;
    var x = ((Math.random() * 2) * 360).toFixed(0);
    var y = ((Math.random() * 2) * 360).toFixed(0);
    roller.className = "die-roller"; // purges previous die-roll-# class
    roller.style.webkitTransition = "";
    roller.style.webkitTransform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
    requestAnimationFrame(function () {
        self.redraw();
    });
  };

  redraw = function () {
    var self = this;
    var roller = self.scope.components.roller.actualNode;
    roller.style.webkitTransition = "-webkit-transform " + this.period + "ms linear";
    roller.style.webkitTransform = "";
    roller.classList.add("die-roll-" + this.nextValue);
  };

  destroy = function () {
    if (this.timeoutHandle) {
        clearTimeout(this.timeoutHandle);
        this.timeoutHandle = null;
    }
  };




}
