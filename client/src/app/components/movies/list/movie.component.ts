import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { MoviesService } from "./../../movie.service";

import { Movie } from "./../../models/movie.model";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"],
})
export class MovieComponent implements OnInit {
  movies: Movie[] = [];
  private MoviesSub: Subscription;

  constructor(public moviesService: MoviesService, private router: Router) {}

  ngOnInit() {
    this.moviesService.getMovies();

    this.MoviesSub = this.moviesService
      .getMoviesUpdateListener()
      .subscribe((movies: Movie[]) => {
        console.log("inside get", movies);
        this.movies = movies;
      });
  }
}
