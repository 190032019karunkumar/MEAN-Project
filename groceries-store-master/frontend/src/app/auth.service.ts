import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userid ;
  private useridlog = 'http://localhost:3000/api/log' ;


  private signinurl = 'http://localhost:3000/api/register' ;

  private loginurl = 'http://localhost:3000/api/login' ;
  // tslint:disable-next-line: typedef
  getToken() {
    throw new Error('Method not implemented.');
  }



  constructor(private http: HttpClient ,  private router: Router) { }

   // tslint:disable-next-line: typedef
   registerUser(user) {
     return this.http.post<any>(this.signinurl, user) ;
   }

   // tslint:disable-next-line: typedef
   loginUser(user) {
    this.userid = user ;
    return this.http.post<any>(this.loginurl, user ) ;
   }

   // tslint:disable-next-line: typedef
   loggedIn() {
    return !!localStorage.getItem('token') ;
  }
  // tslint:disable-next-line: typedef

// tslint:disable-next-line: typedef
etToken() {
    return localStorage.getItem('token');
  }

  // tslint:disable-next-line: typedef
  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('User');
    this.router.navigate(['../']);
  }
  // tslint:disable-next-line: typedef


}
