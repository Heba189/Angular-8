import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup ,Validator, Validators,FormsModule  } from '@angular/forms';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
contactsForm = new FormGroup({
  userName : new FormControl('',[Validators.required ,Validators.minLength(4)]),
  subject : new FormControl('',[Validators.required , Validators.pattern(/^[A-Z]/)]),
  userMail:new FormControl('',[Validators.email] )
})

messagesContainer:any[]=[];
saveForm(){

 

  let message ={
    name : this.contactsForm.controls.userName.value,
    subject : this.contactsForm.controls.subject.value,
    mail : this.contactsForm.controls.userMail.value,
  }

  this.messagesContainer.push(message)
  localStorage.setItem('messagesContainer',JSON.stringify(this.messagesContainer))

  // if(this.messagesContainer != null) 
this.contactsForm.value==null;
// this.contactsForm.value =='';
//   this.saveAll()
}



  constructor() { 
   
    // if(savedTasks)  this.messagesContainer =  JSON.parse(savedTasks) ;
    // else this.messagesContainer = []
  
  }

  ngOnInit() {
  }

  // myVal (control : FormGroup){
  //   if(control.value ==this.contactsForm.value)return null;
  //   else control.value =='';
  // }

}
