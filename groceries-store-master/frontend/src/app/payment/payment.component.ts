import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { PaymentService } from '../payment.service';
import { ProserviceService } from '../products/shared/proservice.service';

export class Arr{
  productid: string;
  bookid: string ;
  Userid: string ;
  mood: string ;
  Adress: string ;
  No: string ;
  email: string ;
  phone: string ;
}
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  myForm: FormGroup;
  public arr: Arr = { productid: '' , bookid: '', mood: '' , Userid: '' , Adress: '' , No : '' , email: '' , phone: ''} ;
  public productid = '' ;
  public debit = false ;
  public confirm = false ;
  public upi = false ;
  public code = null;
    // tslint:disable-next-line: max-line-length
    constructor(private fb: FormBuilder , private book: PaymentService , private router: Router , private auth: AuthService , private proser: ProserviceService) { }

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
    ondelivery(){
      this.confirm = true ;
      this.debit = false ;
      this.upi = false ;
      console.log(this.productid) ;
      this.arr.productid = this.productid ;
      this.arr.bookid = '';
      this.arr.mood = 'cash on delivery';
      this.arr.Userid =  this.auth.userid ;
      this.arr.Adress = this.myForm.value.Adress ;
      this.arr.No = this.myForm.value.No ;
      this.arr.email = this.myForm.value.email;
      this.arr.phone = this.myForm.value.phone ;

      this.book.books(this.arr).subscribe (
       res => {
         console.log(res);

         this.confirm = true ;
       },
       err => {
         console.log(err);

          }

      );
    }

   // tslint:disable-next-line: typedef
   UPI(){
     this.arr.mood = 'upi' ;
     this.upi = true ;
     this.debit = false ;
     this.confirm = true ;
     console.log(this.productid) ;
     this.arr.productid = this.productid ;
     this.arr.bookid = '';
     this.arr.Userid =  this.auth.userid ;
     this.arr.Adress = this.myForm.value.Adress ;
     this.arr.No = this.myForm.value.No ;
     this.arr.email = this.myForm.value.email;
     this.arr.phone = this.myForm.value.phone ;
     this.code = Math.floor(Math.random() * (1000000000000 - 1)) + 1;
     this.book.books(this.arr).subscribe (
       res => {
         console.log(res);
         alert('payment sucessfully') ;
         this.confirm = true ;
       },
       err => {
         console.log(err);
         alert('Error in payment please try again') ;
          }

      );
   }
   // tslint:disable-next-line: typedef
   net(){
     this.arr.mood = 'net baking' ;
     this.upi = false ;
     this.debit = true ;
     this.confirm = false ;
   }
    // tslint:disable-next-line: typedef
    booking(){
      console.log(this.productid) ;
      this.arr.productid = this.productid ;
      this.arr.bookid = '';
      this.arr.Userid =  this.auth.userid ;
      this.arr.Adress = this.myForm.value.Adress ;
      this.arr.No = this.myForm.value.No ;
      this.arr.email = this.myForm.value.email;
      this.arr.phone = this.myForm.value.phone ;

      this.book.books(this.arr).subscribe (
       res => {
         console.log(res);
         alert('payment sucessfully') ;
         this.confirm = true ;
       },
       err => {
         console.log(err);
         alert('Error in payment please try again') ;
          }

      );
        }
      }
