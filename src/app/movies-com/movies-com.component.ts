import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service'
@Component({
  selector: 'app-movies-com',
  templateUrl: './movies-com.component.html',
  styleUrls: ['./movies-com.component.css']
})
export class MoviesComComponent implements OnInit {

  currentPageNum:number = 1;
  pages:number[]=[1,2,3,4,5,6,7,8]
  imagePre:string='https://image.tmdb.org/t/p/w500';
  moviesContainer : any[]


  changePage(num){

       this.currentPageNum = num;
       this._MoviesService.getMovies(this.currentPageNum).subscribe(data => {
        this.moviesContainer = data.results;
      
    })
  }

  constructor(public _MoviesService:MoviesService ) { 
    _MoviesService.getMovies(this.currentPageNum).subscribe(data => {
        this.moviesContainer = data.results;  
    })}
  

  ngOnInit() {
  }

  }
