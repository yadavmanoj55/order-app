import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { OrderServiceService } from '../order-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productsList: any;
  showModal: boolean = false;

  constructor(private orderservice:OrderServiceService) {
    this.productsList = this.orderservice.getOrdersList()
    this.orderservice.setHomePage(false)
   }

  ngOnInit(): void {
    this.showModal= false;
  }
   
   addtocart(event:any){
    console.log(event);
    this.orderservice.addOrdersToCart(event);
    this.showModal = true;
    setTimeout(() => this.closeModal(), 1000);
   }

   closeModal(){
    this.showModal = false;
  }
}
