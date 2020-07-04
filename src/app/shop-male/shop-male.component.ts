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
  
  selectedProdName: string;
  selectedProdPrice: number;
  selectedQtty: number;
  selectedAddr: string;
  selectedBustop: string;

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
    prodName: new FormControl({value: 'late night', disabled: true}),
    prodPrice: new FormControl({value: this.selectedProdPrice, disabled: true}),
    quantity: new FormControl({value: this.selectedQtty}, Validators.required),
    buyerAddr: new FormControl({value: this.selectedAddr}, Validators.required),
    nearestBustop: new FormControl({value: this.selectedBustop}, Validators.required),
    /*radioPhone: new FormControl(),
    radioEmail: new FormControl(),*/
    buyerPhone: new FormControl(),
    buyerEmail: new FormControl()
  })

  constructor() { }

  ngOnInit(): void {

    this.backUpBtn=document.getElementById('backUp');
    window.onscroll = function(){
      if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        this.backUpBtn.style.display= 'block';
      }else{
        this.backUpBtn.style.display= 'none';
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
    console.warn(this.orderForm.value);
    console.log('submitted');
  }

  backToTop(): void{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
  }

}
