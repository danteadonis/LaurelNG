import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm=new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    message: new FormControl('', Validators.required)
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
      name: '',
      email: '',
      message: ''
    })
  }

}
