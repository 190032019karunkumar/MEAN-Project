import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public aauthService: AuthService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  getLoginIn() {
    return this.aauthService.loggedIn();
  }
  // tslint:disable-next-line: typedef
  getLoginout(){
    return this.aauthService.logoutUser() ;
  }
}
