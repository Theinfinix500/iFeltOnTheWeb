import {Injectable} from "@angular/core"
import {Movie} from "./models/movie.model"
import {Emotions} from "./models/emotions"
import { Subject } from "rxjs";
import { Router} from '@angular/router';

@Injectable ({providedIn:"root"})

export class MoviesService{


    private movies:Movie[] = [];
    private moviesUpdated = new Subject<Movie[]>();


    emotions:Emotions[]=[
      {emotion:'happy'},
      {emotion:'sad'},
      {emotion:'inspiring'},
      {emotion:'melancholoic'},
      {emotion:'anger'}
    ]

    constructor() { }

    getMovies(){
      //create a copy of the movire arryay, but it's a copy 
      return ([...this.movies])
    }


    getEmotions() {
      return this.emotions;
    }

    addMovie(movie:Movie){
      this.movies.push(movie)
      this.moviesUpdated.next([...this.movies]);
   }


  getMoviesUpdateListener() {
    return this.moviesUpdated.asObservable();
  }



}
