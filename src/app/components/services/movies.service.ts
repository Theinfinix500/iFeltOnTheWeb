import { Movie } from "../models/movie.model"
import { Subject } from "rxjs";

export class MovieService {
private moviesUpdated = new Subject<Movie[]>();
movie:Movie;

getMoviesUpdateListener() {
    return this.moviesUpdated.asObservable();
  }


addMovie(title: string) {
this.movie = { id: null, title: title};
// this.moviesUpdated.next(this.movie)   
}



}