import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderServiceService } from './order-service.service';
import { OrderStockComponent } from './order-stock/order-stock.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes =[
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'orderstock', component: OrderStockComponent},
  {path: 'checkout', component: CheckoutPageComponent},
  {path: 'payment', component: PaymentComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CheckoutPageComponent,
    HomeComponent,
    OrderStockComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [OrderServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
