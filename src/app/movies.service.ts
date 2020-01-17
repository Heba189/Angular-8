import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {observable, Observable} from "rxjs";
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public _HttpClient: HttpClient ) { }

  getMovies(pageNumberr):Observable<any>
  {
    // return this._HttpClient.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=07e9b198a22647d694700140f332075c")
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/week?api_key=8c4a17696dab522853861e576ee44805&page="+pageNumberr)
  }
}
