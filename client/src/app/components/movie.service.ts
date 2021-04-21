import { Injectable } from "@angular/core";
import { Movie } from "./models/movie.model";
import { Emotions } from "./models/emotions";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class MoviesService {
  private movies: Movie[] = [];
  private moviesUpdated = new BehaviorSubject<Movie[]>([]);

  emotions: Emotions[] = [
    { emotion: "happy" },
    { emotion: "sad" },
    { emotion: "inspiring" },
    { emotion: "melancholoic" },
    { emotion: "anger" },
  ];

  constructor(private httpClient: HttpClient, private router: Router) {}

  getMovies() {
    this.httpClient
      .get<{ message: string; movies: Movie[] }>(
        "http://localhost:8080/api/movies"
      )
      .subscribe((postData) => {
        this.movies = postData.movies;
        // console.log(this.movies);
        this.moviesUpdated.next([...this.movies]);
      });
  }

  getEmotions() {
    return this.emotions;
  }

  addMovie(movie: Movie) {
    console.log("movie service addMovie", movie);
    this.httpClient
      .post<Movie>("http://localhost:8080/api/movie", movie)
      .subscribe((responseData) => this.router.navigate(["/"]));
  }

  getMoviesUpdateListener() {
    return this.moviesUpdated.asObservable();
  }
}
