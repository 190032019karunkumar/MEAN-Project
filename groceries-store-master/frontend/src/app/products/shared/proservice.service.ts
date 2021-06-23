import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
// tslint:disable-next-line: import-blacklist
import { Observable } from 'rxjs/Rx';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class ProserviceService {
  public total = 0;
  public items = 0;
  public productid = '' ;
  public contracts: Product[] = [ ] ;
  public store: Product[] = [ ] ;
readonly baseurl = 'http://localhost:3000/product';
  constructor(private http: HttpClient) { }

 getProducts(): Observable<Product[]>{
   return this.http.get<Product[]>(this.baseurl);
 }

}
