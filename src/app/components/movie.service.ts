import {Injectable} from "@angular/core"
import {Movie} from "./models/movie.model"
import {Emotions} from "./models/emotions"
import { BehaviorSubject } from "rxjs";

@Injectable ({providedIn:"root"})

export class MoviesService{


    private movies:Movie[] = [];
    private moviesUpdated = new BehaviorSubject<Movie[]>([]);


    emotions:Emotions[]=[
      {emotion:'happy'},
      {emotion:'sad'},
      {emotion:'inspiring'},
      {emotion:'melancholoic'},
      {emotion:'anger'}
    ]

    constructor() { }

    getMovies(){
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
