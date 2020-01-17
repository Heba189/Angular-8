import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName : string = "Heba Abdou";
  userAge :number=24;
  imgSrc :string="assets/users/iphone-dark-notebook-pen-34140.jpg";
  imgSrc1 :string="assets/users/light-smartphone-macbook-mockup-67112.jpg";
  imgSrc2 :string="assets/users/person-holding-space-gray-iphone-5s-861103.jpg";
  isAdmin :boolean = false;
  user :object = {name :'Heba' ,age :24};
  friends:string[]=["mai","ali","mena"]

  
  constructor() { }

  ngOnInit() {
  }

}
