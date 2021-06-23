import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { BookserService } from '../bookser.service';
import { AuthService } from '../auth.service';
import { ProserviceService } from '../products/shared/proservice.service';

export class Arr{
  productid: string;
  Userid: string ;
  Adress: string ;
  No: number ;
  email: string ;
  phone: number ;
}
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  myForm: FormGroup;
public arr: Arr = { productid: '' , Userid: '' , Adress: '' , No : null , email: '' , phone: null} ;
public productid = '' ;
  // tslint:disable-next-line: max-line-length
  constructor(private fb: FormBuilder , private book: BookserService , private router: Router , private auth: AuthService , private proser: ProserviceService) { }

  ngOnInit(): void {

     this.myForm = this.fb.group({
      productid:  '',
    Userid: '',
    Adress: '',
    No: null,
    email: '',
    phone:  null,
    });
     this.productid = this.proser.productid ;
  }


  // tslint:disable-next-line: typedef
  booking(){
    console.log(this.productid) ;
    this.arr.productid = this.productid ;
    this.arr.Userid =  this.auth.userid ;
    this.arr.Adress = this.myForm.value.Adress ;
    this.arr.No = this.myForm.value.No ;
    this.arr.email = this.myForm.value.email;
    this.arr.phone = this.myForm.value.phone ;

    this.book.booked(this.arr).subscribe (
     res => {
       console.log(res);
       alert('Booked sucessfully') ;
     },
     err => {
       console.log(err);
       alert('Error in booking please try again') ;
        }

    );
      }
    }
