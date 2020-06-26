import { Component, OnInit } from '@angular/core';
import { 
  trigger,
  state,
  style,
  keyframes,
  animate,
  transition
 } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('sideNavTrigger', [

      state('hidden', style({
        display: 'none',
        transform: 'translateX(100%)'
      })),

      state('shown', style({})),

      transition('hidden => shown', [
        animate('.7s ease-out', keyframes([
          style({display: 'block'}),
          style({transform: 'translateX(100%)'}),
          style({transform: 'translateX(-75px)'}),
          style({transform: 'translateX(15px)'}),
          style({transform: 'translateX(0)'})
        ]))
      ]),

      transition('shown => hidden', [
        animate('.5s ease-in', keyframes([
          style({transform: 'translateX(0)'}),
          style({transform: 'translateX(-75px)'}),
          style({transform: 'translateX(100%)'})
        ]))
      ])
    ])
    
  ]
})

export class NavbarComponent implements OnInit {

  shouldToggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggler(): void{
    this.shouldToggle= !this.shouldToggle;
  }

  closeTop(): void{
    document.getElementById('top').style.display='none';
  }

}
