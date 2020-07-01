import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm=new FormGroup({
    personName: new FormControl('', Validators.required),
    personEmail: new FormControl(''),
    personMessage: new FormControl('', Validators.required)
  })

  constructor() { }

  ngOnInit(): void {

    document.getElementById("thanks").style.display= 'none';

  }

  closeThanks(): void{
    document.getElementById("thanks").style.display= 'none';
  }

  onSubmit(): void{
    console.warn(this.contactForm.value);
    document.getElementById("thanks").style.display= 'block';
    this.contactForm.patchValue({
      personName: '',
      personEmail: '',
      personMessage: ''
    })
  }

}
