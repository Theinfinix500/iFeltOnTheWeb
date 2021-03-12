import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import {Movie} from '../../models/movie.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  emotions = [
    { name: "Happy" },
    { name: "Melancholic" },
    { name: "Optimistic" },
    { name: "Inspired" },
    { name: "Concerned" },
  ];

  movies : Movie[] = [

  ];


  classifyEmotion(form: NgForm){
  console.log(form.value)
  }

  createMovie(form: NgForm){
    this.movies.push({id:10,title:form.value.movieTitle})
    console.log(form.value)
  }


}
