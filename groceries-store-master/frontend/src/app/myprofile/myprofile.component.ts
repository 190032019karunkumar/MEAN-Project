import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { AuthService } from '../auth.service';
import { ProserviceService } from '../products/shared/proservice.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  myForm: FormGroup;
  public contracts ;
  prof: any;
  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.prof  =  this.auth.userid ;
    this.myForm = this.fb.group({
      UserName: '',
      FirstName: '',
      LastName: '',
      Password : '',
      email: '',
      phone: null ,
    });
    this.myForm.setValue({
      UserName: this.prof.UserName,
      FirstName: this.prof.FirstName,
      LastName: this.prof.LastName,
      Password : this.prof.Password,
      email: this.prof.email,
      phone: this.prof.phone ,
    }) ;
  }
  // tslint:disable-next-line: typedef
}
