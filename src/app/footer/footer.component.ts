import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  details: string[] = [
    'https://instagram.com/laurelnigeria',
    'https://twitter.com/laurelnigeria',
    'https://laurelnigeria@gmail.com',
    'https://wa.me/2348168146389'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
