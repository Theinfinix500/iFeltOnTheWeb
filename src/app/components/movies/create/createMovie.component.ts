import { Router } from "@angular/router";
import { MoviesService } from "./../../movie.service";
import { NgForm } from "@angular/forms";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { Movie } from "./../../models/movie.model";

@Component({
  selector: "app-createMovie",
  templateUrl: "./createMovie.component.html",
  styleUrls: ["./createMovie.component.css"],
})
export class CreateMovieComponent {
  constructor(public moviesService: MoviesService, private router: Router) {}

  onMovieCreate(form: NgForm) {
    if (form.invalid) {
      alert("invalid");
    }
    // console.log(form.value)

    const movie: Movie = {
      title: form.value.title,
      file: form.value.file,
      direction: form.value.direction,
      year: form.value.year,
      country: form.value.country,
      duration: form.value.duration,
      cast: {
        name1: form.value.name1,
        name2: form.value.name2,
      },
    };

    this.moviesService.addMovie(movie);
    // console.log("onMovieCreate",this.moviesService.addMovie(movie))
    this.router.navigate(["/home"]);
  }
}
