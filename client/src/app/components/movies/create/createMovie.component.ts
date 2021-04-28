import { Router } from "@angular/router";
import { MoviesService } from "./../../movie.service";
import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { Movie } from "./../../models/movie.model";

@Component({
  selector: "app-createMovie",
  templateUrl: "./createMovie.component.html",
  styleUrls: ["./createMovie.component.css"],
})
export class CreateMovieComponent implements OnInit {
  private mode = "create";

  constructor(
    public moviesService: MoviesService,
    private router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((data) => {
      console.log(data);
    });
  }

  onMovieCreate(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log("form value", form.value);
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

    console.log("create movie", movie);
    this.moviesService.addMovie(movie);
    // console.log("onMovieCreate",this.moviesService.addMovie(movie))
    this.router.navigate(["/home"]);
  }
}
