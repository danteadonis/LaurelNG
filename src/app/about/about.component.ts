import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  brandName: string= `LaurelNg`;
  ownerName: string= `Lawrence Adeyeye`;
  aboutText: string= `${this.brandName} is a clothing brand designed and managed 
    by ${this.ownerName}. It started as a small-time shirt sale on school 
    campus and is gradually becoming a big enterprise. The brand's main goal is 
    connecting with people, and this can be seen in most of the merchandise 
    as a lot of the designs are relatable. The brand also specializes in 
    casual wears, random prints, and plain t-shirts.`;

  constructor() { }

  ngOnInit(): void {
  }

}
