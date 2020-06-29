import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  personName: string;
  personEmail: string;
  personMessage: string;

  constructor() { }

  ngOnInit(): void {
    document.getElementById("thanks").style.display= 'none';
  }

  showThanks(): void{
    document.getElementById("thanks").style.display= 'block';
  }

  closeThanks(): void{
    document.getElementById("thanks").style.display= 'none';
  }

}
