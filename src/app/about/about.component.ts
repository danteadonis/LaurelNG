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
  likes: string= `Fashion, Music, Social events.`;
  hobbies: string= `Reading, Writing (Blogging), Creating Art.`;
  profileImg: string = './assets/images/IMG-20200706-WA0020.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
