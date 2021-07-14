import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../order-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  count: number =0;

  constructor(private orderservice: OrderServiceService) { 
    this.orderservice.setHomePage(true)

    this.orderservice.cartCount
       .subscribe((ordersCount) => {
              this.count = ordersCount;
          });

    // this.orderservice.cartCount.subscribe(res =>{
    //   console.log(res);
    // })
  }

  ngOnInit(): void {
    this.orderservice.setHomePage(true)
  }
  
  ngOnChanges(){
  console.log("here")
  }

  isstillOnHomePage(){
    return this.orderservice.checkIfHomePage()
  }
}
