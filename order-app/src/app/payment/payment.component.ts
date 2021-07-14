import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderServiceService } from '../order-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  showModal: boolean = false;

  userForm = new FormGroup({
    name: new FormControl("",Validators.required),
    address: new FormControl("",Validators.required ),
    pincode: new FormControl("",[Validators.required, Validators.pattern("^[0-9]*$")]),
    phone: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
    landmark: new FormControl("",Validators.required),
  }); 
  
  
  constructor(private router: Router, public orderservice: OrderServiceService) { }

  ngOnInit(): void {
  }

  get f(){
    return this.userForm.controls;
  }

  onSubmit(orderId: any){
    this.showModal = true;
    setTimeout(() => this.closeModal(), 1000);
  
  }

   closeModal(){
    this.showModal = false;
    this.orderservice.resetCart();
    this.userForm.reset();
  }
}
