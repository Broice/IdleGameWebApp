import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
    selector: 'idle-main-component',
    templateUrl: './idle-main.component.html'
})
export class IdleMainComponent {
    public currentCount = 0;

    public increment = 1;
    public incrementMultiplier = 1;

    public interval = null;

    public autoMultiplier = 1;

    public buildCost = 1;

    constructor() {
        this.interval = setInterval(() => this.autoIncrement(), 1000);
    }

    public incrementCounter() {
        this.currentCount += (this.increment * this.incrementMultiplier);
    }

    public autoIncrement() {
        this.currentCount += (this.increment * this.autoMultiplier);
    }

    public buildIncrementBuilding() {
        if (this.currentCount >= this.buildCost) {
            this.increment += 1;
            this.currentCount -= this.buildCost;
            this.buildCost = Math.round(this.buildCost * 1.5);
        }
        else {
            alert("You don't have enough count to buy an increment increase!");
        }
    }
}
