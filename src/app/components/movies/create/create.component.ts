import { Movie } from './../../../models/movie.model';
import { NgForm } from '@angular/forms';
import { MovieService } from './../../../services/movie.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public moviesService:MovieService) { }

  ngOnInit() {
  }

  onMovieCreate(form:NgForm){

    const movie:Movie ={
      title:form.value.title,
      file: form.value.file,
      direction:form.value.direction,
      year: form.value.year,
      country:form.value.country,
      duration: form.value.duration,
      cast:{
        name1: form.value.name1,
        name2: form.value.name2,
      }
    }

    this.moviesService.addMovie(movie);


  }

}
