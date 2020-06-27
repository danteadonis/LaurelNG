import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carouselImages: string[] = [
    "assets/images/DSC_0093-Edit.jpg",
    "assets/images/DSC_0025-Edit.jpg",
    "assets/images/DSC_0066-Edit.jpg"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
