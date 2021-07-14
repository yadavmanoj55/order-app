import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderServiceService } from '../order-service.service';

@Component({
  selector: 'app-order-stock',
  templateUrl: './order-stock.component.html',
  styleUrls: ['./order-stock.component.css']
})
export class OrderStockComponent implements OnInit {
  latestIdValue: any;
  newId: number = 0;
  showModal: boolean = false;

  productForm = new FormGroup({
    id: new FormControl(""),
    prdname: new FormControl("",[Validators.required, Validators.maxLength(20)]),
    description: new FormControl("",[Validators.required, Validators.maxLength(50)]),
    Price: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
    Quantity: new FormControl(1,[Validators.required, Validators.pattern("^[0-9]*$")]),
    totalqty: new FormControl("",[Validators.required, Validators.pattern("^[0-9]*$")]),
    imgsrc: new FormControl("",[Validators.required, Validators.maxLength(50)]),
  }); 
  

  constructor(private orderservice: OrderServiceService, private modalService: NgbModal) {  
    this.orderservice.setHomePage(false)
  
  }

  ngOnInit(): void {
  
    this.latestIdValue = this.orderservice.getOrdersList()
    this.newId = this.latestIdValue.length > 0 ? this.latestIdValue[this.latestIdValue.length-1].id + 1 : 1;
    this.productForm.controls['id'].setValue(this.newId);
  }

  ngAfterViewInit(): void {
    this.showModal= false;
}

  get f(){
    return this.productForm.controls;
  }

  onSubmit(product: any) {
let newproduct= {
  id:this.productForm.controls['id'].value,
  name: this.productForm.controls['prdname'].value, 
  description: this.productForm.controls['description'].value, 
  price: this.productForm.controls['Price'].value, 
  qty:this.productForm.controls['Quantity'].value, 
  totalQty:this.productForm.controls['totalqty'].value, 
  src:this.productForm.controls['imgsrc'].value
}
this.orderservice.updateProductList(newproduct);
this.showModal = true;
  }

  closeModal(){
    this.showModal = false;
  }
}
