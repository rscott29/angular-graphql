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
    this.sidenavWidth = 20;
  
    console.log("increase sidenav width");
  }
  decrease() {
    this.sidenavWidth = 4;
    console.log("decrease sidenav width");
  }

  config = {
    paddingAtStart: true,
    classname: 'sidenav',
    listBackgroundColor: '#fff',
    fontColor: '#000',
    backgroundColor: '#fff',
    selectedListFontColor: '#000',
    highlightOnSelect: false,
    collapseOnSelect: true,
    interfaceWithRoute: true
  };
  appitems = [
    {
     
      label: 'Cats',
      icon: 'alarm',
      items: [
        {
          label: 'View Cats',
          link: '/cats',
          icon: 'favorite'
        },
        {
          label: 'Add Cat',
          link: '/item-2-2',
          icon: 'favorite_border'
        }
      ]
    },
    {
      label: 'Item 3',
      link: '/item-3',
      icon: 'offline_pin'
    },
    {
      label: 'Item 4',
      link: '/item-4',
      icon: 'star_rate',
      hidden: true
    }
  ];
 
}
