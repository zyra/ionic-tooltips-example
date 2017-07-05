import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tooltipEvent: 'click' | 'press' = 'click';
  showArrow: boolean = true;
  duration: number = 3000;

}
