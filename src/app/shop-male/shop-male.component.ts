import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shop-male',
  templateUrl: './shop-male.component.html',
  styleUrls: ['./shop-male.component.scss']
})
export class ShopMaleComponent implements OnInit {
  
  pageTitle: string= 'Products';
  backUpBtn: any;

  notifyPhone: boolean;

  products: any[] = [
    {
      productName: 'Depressed Shirt',
      description: `Fashion can be used to express one's feelings, and this is a good one. It's also a way people who aren't depressed can show love and support to those who are.`,
      price: 3500,
      imgUrl: './assets/images/DSC_0025-Edit.jpg'
    },
    {
      productName: 'Adult Kids',
      description: `This merch simply tells our story: Kids Who Started Life As Adults.`,
      price: 3000,
      imgUrl: './assets/images/DSC_0051-Edit.jpg'
    },
    {
      productName: 'Glitch',
      description: `A special design with the glitch effect. Get glitching!`,
      price: 5000,
      imgUrl: './assets/images/DSC_0057-Edit.jpg'
    },
    {
      productName: 'No Pictures',
      description: `Sometimes you're just not in the mood, let this shirt speak for you. (comes in different colors)`,
      price: 2500,
      imgUrl: './assets/images/DSC_0066-Edit.jpg'
    },
    {
      productName: 'Plain Tees',
      description: `Vibrant colored plain t-shirts.`,
      price: 1500,
      imgUrl: './assets/images/IMG-20191111-WA0002.jpg'
    },
    {
      productName: 'Depressed Shirt',
      description: `Rear view of the Depressed merch.`,
      price: 3500,
      imgUrl: './assets/images/DSC_0085-Edit.jpg'
    }
  ]

  orderForm= new FormGroup({
    productName: new FormControl('', Validators.required),
    //prodPrice: new FormControl({value: this.selectedProdPrice, disabled: true}),
    quantity: new FormControl('', Validators.required),
    shirtSize: new FormControl(),
    buyerAddress: new FormControl('', Validators.required),
    nearestBustop: new FormControl('', Validators.required),
    /*radioPhone: new FormControl(),
    radioEmail: new FormControl(),*/
    buyerPhone: new FormControl(),
    buyerEmail: new FormControl()
  })

  constructor() { }

  ngOnInit(): void {

    this.backUpBtn=document.getElementById('backUp').style.display='none';

    window.onscroll= function(){
      if(document.body.scrollTop >= 500 || document.documentElement.scrollTop >= 500){
        document.getElementById('backUp').style.display='block';
      }else{
        document.getElementById('backUp').style.display='none';
      }
    }

  }

  notifyMeByPhone(): void{
    this.notifyPhone= true;
  }
  notifyMeByEmail(): void{
    this.notifyPhone= false;
  }
  
  onSubmit(): void{
    console.log(this.orderForm.value);
    this.orderForm.patchValue({
      productName: '',
      quantity: '',
      buyerAddress: '',
      nearestBustop: '',
      buyerPhone: '',
      buyerEmail: ''
    })
  }

  backToTop(): void{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
  }

}
