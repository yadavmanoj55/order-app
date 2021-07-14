import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderServiceService } from '../order-service.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  addedItems :any = []
  showCartEmpty: boolean = true;
  totalamount: number = 0;
  itemCount: number = 0;
  showCheckout: boolean =  false;


  
  constructor(private orderservice: OrderServiceService, private router: Router) {
    this.addedItems = this.orderservice.getOrdersOfCart();
    this.itemCount = this.addedItems.length;
    this.orderservice.setHomePage(false)
    if(this.addedItems.length > 0) {
      this.showCartEmpty= false;
    }
    this.orderservice.amount.subscribe(res => {
      this.totalamount = res;
    })
   }

  ngOnInit(): void {
  }

  updateCart(item: any){
    item.qty +=1;
    this.itemCount +=1;
    this.orderservice.updateCartHeader("add");
    this.showCartEmpty= false;
   
    this.totalamount = item.price + this.totalamount;
  
  }

  removefromCart(item:any){
    item.qty -=1;
    this.itemCount -=1;
    this.orderservice.updateCartHeader("remove");
    this.totalamount = this.totalamount - item.price;
    if(item.qty === 0){
      const index = this.addedItems.findIndex((prod: any) => prod.id === item.id);
      this.addedItems.splice(index,1)
      
       }
       if(this.addedItems.length === 0) {
        this.orderservice.totalamount = 0;
       this.showCartEmpty = true;
       }

  }

  checkout(){
this.showCheckout = true

this.router.navigateByUrl('/payment');
  }
}
