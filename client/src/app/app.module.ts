import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ProdlistComponent } from './prodlist/prodlist.component';
import { NewprodComponent } from './newprod/newprod.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes =[
  {
    path: 'prod', 
    component: ProdlistComponent
  },
  {
     path:'',
     pathMatch: 'full',
     redirectTo: 'prod'
  },
 {
    path: 'prod/new',
    component: NewprodComponent
 },  
 {
   path: 'prod/:id/edit',
   component: NewprodComponent
 },
 {
  path: 'prod/:id/cart',
  component: CartComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProdlistComponent,
    NewprodComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,   
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
