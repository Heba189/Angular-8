import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {


  // users2:object[]=[];

  users :object[]=[
    {name:'Ali' ,age :25 ,img:'assets/users/u1.jpg', salary:5555},
    {name:'mai' ,age :25 ,img:'assets/users/u2.jpg', salary:6665},
    {name:'Ahmed' ,age :25 ,img:'assets/users/u3.jpg', salary:7755},
    {name:'mai' ,age :25 ,img:'assets/users/u1.jpg', salary:5555},
    {name:'mohamed' ,age :25 ,img:'assets/users/u2.jpg', salary:6665},
    {name:'nabil' ,age :25 ,img:'assets/users/u3.jpg', salary:7755},
  ]


  constructor() { }
}
