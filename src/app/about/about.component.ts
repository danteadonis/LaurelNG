import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  brandName: string= `Laurel`;
  ownerName: string= `Lawrence Adeyeye`;
  studies: string= `Computer Science`;
  likes: string= `likesss`;
  hobbies: string= `1,2,3.`;
  profileImg: string = './assets/images/DSC_0057-Edit.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
