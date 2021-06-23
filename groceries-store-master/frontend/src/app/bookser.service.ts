import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookserService {

 private bookurl = 'http://localhost:3000/booking/bookdata' ;

 constructor(private http: HttpClient ,  private router: Router) { }

  // tslint:disable-next-line: typedef
  booked(bookdata) {
    return this.http.post<any>(this.bookurl, bookdata) ;
  }
}
