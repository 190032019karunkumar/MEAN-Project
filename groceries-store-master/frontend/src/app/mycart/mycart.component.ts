import { Component, OnInit } from '@angular/core';
import { ProserviceService } from '../products/shared/proservice.service';
import { Product } from '../products/shared/product.model' ;
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  public store: Product[] = [ ] ;
  public i = 0 ;
  public contracts: Product[] = [];
  public sum = 0 ;
  public length = 0 ;
  public total = 0;
  constructor(private product: ProserviceService, private Toastr: ToastrService) { }

  ngOnInit(): void {
    this.contracts = this.product.contracts;
    this.length = this.product.items;
    this.total =  this.product.total;
    this.store = this.product.store;
    console.log(this.store);
    for (this.i = 0; this.i < this.store.length; this.i++) {
      this.sum = (this.sum + this.store[this.i].price);
      }
  }
  // tslint:disable-next-line: typedef
  remove(k) {
    this.i = this.store.findIndex(h => h._id === k._id);
    this.Toastr.error('Successfully removed from cart!', '', {timeOut: 3000});
    console.log(this.store);
    if (this.i !== -1) {
      this.store.splice(this.i, 1) ;
  }
    this.product.items = this.product.items - 1;
    this.product.total = this.product.total - k.price;
    console.log(this.store);
  }

}
