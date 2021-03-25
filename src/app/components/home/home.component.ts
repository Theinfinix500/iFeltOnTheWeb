import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Movie } from "../models/movie.model";
import { Emotions } from "../models/emotions";

import { MoviesService } from "./../movie.service";

import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  moviesUpdated: Subscription;
  movies: Movie[] = [];
  emotions: Emotions[] = [];

  constructor(public movieService: MoviesService) {}

  ngOnInit() {
    // this.movies = this.movieService.getMovies();
    // console.log(this.movies)

    this.moviesUpdated = this.movieService
      .getMoviesUpdateListener()
      .subscribe((moviesReturned: Movie[]) => {
        // debugger;
        this.movies = moviesReturned;
        console.log(this.movies);
      });

    this.emotions = this.movieService.getEmotions();
  }

  ngOnDestroy() {
    this.moviesUpdated.unsubscribe();
  }

  classifyEmotion(form: NgForm) {}

  // get diagnostic() { return JSON.stringify(this.movies); }

  // get diagnostic2() { return JSON.stringify(this.emotions); }
}
