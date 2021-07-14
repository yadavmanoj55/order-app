import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  ordersList:any =[];
  isOnHomePage:boolean = false;
  orderCount: number = 0;
  cartCount = new BehaviorSubject(0);
  cartCountChangedObservable = this.cartCount.asObservable();

  totalamount: number = 0;
  amount = new BehaviorSubject(0);
  totalamountChangedObservable = this.amount.asObservable();

  productsList = [
    {id:1, name: 'MI TV', description: "This is MI Tv",price: 8799, qty:1, totalQty:10, src:"" },
    {id:2, name: 'Phone', description: "Latest Phone", price: 999, qty:1,totalQty:10, src:"" },
    {id:3, name: 'Ac', description: "Inverter Ac", price: 99, qty:1, totalQty:10, src:"" }
   ]

  constructor() { 
    
  }

  setHomePage(value: boolean) {
    this.isOnHomePage = value;
  }
  
  checkIfHomePage(){
    return this.isOnHomePage;
  }

  addOrdersToCart(item :any){
    const index = this.ordersList.findIndex((prod: any) => prod.id === item.id);
    
    if(index === -1) {
      this.ordersList.push(item);
     
    } else { 
      item.qty +=1;

    }
    this.updateCartHeader("add")
   this.updateCartSummary(item)
  }

  updateCartSummary(item: any){
    this.totalamount = item.price + this.totalamount;
    this.amount.next(this.totalamount);
  }

  updateCartHeader(action: string){
    if(action === "add"){
      this.orderCount +=1;
      this.cartCount.next(this.orderCount);
    } else {
      this.orderCount -=1;
      this.cartCount.next(this.orderCount);
    }
    
  }

  resetCart(){
    this.ordersList = [];
    this.cartCount.next(0);
    this.amount.next(0);
    this.totalamount = 0;
    this.orderCount = 0;
  }

  getOrdersOfCart(){
  return this.ordersList;
  }

  getOrdersList(){
    return this.productsList;
  }
  updateProductList(prod: any){
    this.productsList.push(prod);
  }

 
}
