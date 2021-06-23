import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private bookurl = 'http://localhost:3000/payment/paydata' ;

 constructor(private http: HttpClient ,  private router: Router) { }

  // tslint:disable-next-line: typedef
  books(paydata) {
    return this.http.post<any>(this.bookurl, paydata) ;
  }
}
