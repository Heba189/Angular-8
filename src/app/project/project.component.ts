import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  name:string="Heba"
  userAge:number=24;
  salary:number=5555;
  constructor() { }

  ngOnInit() {
  }

}
