import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

 usersContainer:any[];
  constructor(_Service1Service: Service1Service) {


    this.usersContainer = _Service1Service.users;
    // for(let i=0; i<this.users.length ;i++){
    //   if(this.users[i].name != 'mai'){
    //     this.users2.push(this.users[i])
    //   }
    // }
   }

  ngOnInit() {
  }

}
