import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public userid = '';
public userdata = '';
  myForm: FormGroup;


  constructor(private fb: FormBuilder , private auth: AuthService , private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
    UserName: '',
    Password : '',
  }) ;
  }

  // tslint:disable-next-line: typedef
  loginUser(){
    this.auth.loginUser(this.myForm.value).subscribe(
      res => {
        console.log(res);

        localStorage.setItem('token', res.token) ;
        localStorage.setItem('User',  JSON.stringify(res.user));
        this.router.navigate(['/products']) ;
        this.auth.userid = JSON.parse(localStorage.getItem('User')) ;
      },
      err => {console.log(err);
        // tslint:disable-next-line: align
        alert(' You entered wrong UserName or Password ');
      }
    )

    ;
   }
}
