import { Component, OnInit } from '@angular/core';
import { ProserviceService } from '../products/shared/proservice.service';
export class Product{
  pic: string;
}
export class Products{
  pic: string;
  name: string;
  position: string;
  description: string;
}
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public contracts ;
  public startIndex = 0 ;
  constructor(private proservie: ProserviceService ) { }
  contract: Product[] = [
    {pic: '/assets/patner1.jpg'},
    {pic: '/assets/patner2.jpg'},
    {pic: '/assets/patner3.jpg'},
    {pic: '/assets/patner4.jpg'},
  ] ;
  ngOnInit(): void {
    this.proservie.getProducts().subscribe(data => this.contracts = data);
  }

}
