import { Component } from "@angular/core";

import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"],
  animations: [
    trigger('slide', [
      state('left', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(-50%)' })),
      transition('* => *', animate(300))
  ])
  ]
})
export class SidenavComponent  {
  sidenavWidth = 4;
  menuState:string = 'out';

  constructor() {}

  increase() {
    this.sidenavWidth = 10;
    console.log("increase sidenav width");
  }
  decrease() {
    this.sidenavWidth = 4;
    console.log("decrease sidenav width");
  }
 
}
