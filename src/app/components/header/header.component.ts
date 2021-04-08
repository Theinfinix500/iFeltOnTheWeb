import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Movie } from "../models/movie.model";
import { Emotions } from "../models/emotions";

import { MoviesService } from "./../movie.service";
import { AlertService } from "../_alert/alert.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  moviesUpdated: Subscription;
  movies: Movie[] = [];
  emotions: Emotions[] = [];

  constructor(
    public movieService: MoviesService,
    protected alertService: AlertService
  ) {}

  options = {
    autoClose: true,
    keepAfterRouteChange: false,
  };

  ngOnInit() {
    // this.movies = this.movieService.getMovies();
    // console.log(this.movies)

    this.moviesUpdated = this.movieService
      .getMoviesUpdateListener()
      .subscribe((moviesReturned: Movie[]) => {
        // debugger;
        this.movies = moviesReturned;
        // console.log('subscriptor HOME',this.movies)
      });

    this.emotions = this.movieService.getEmotions();
  }
}
