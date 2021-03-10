import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subject } from "rxjs";
import {Movie} from '../models/movie.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movie:Movie;
  private moviesUpdated = new Subject<Movie[]>();

emotions =[
  {name:"happy"},
  {name:"Melancholic"},
  {name:"Optimistic"},
  {name:"Inspired"},
  {name:"Concerned"}
]



movies: Movie [] = [
  {id:'1', title:"Lost in Translation"},
  {id:'2', title:"Cashback"},
  {id:'3', title:"A Single Man"},
  {id:'4', title:"Happy Go Lucky"},
  {id:'5', title:"Cinema Paradiso"}
]

ngOnInit(){
this.getMoviesUpdateListener()
}

createMovie(form: NgForm) {
    this.movie = { id: null, title: form.value.movietitle};
    this.movies.push(this.movie)
    this.moviesUpdated.next(this.movies)   
  }

  getMoviesUpdateListener() {
    return this.moviesUpdated.asObservable();
  }

  classifyEmotion(form:NgForm){
    console.log(form.value)
  }



  // get diagnostic() { return JSON.stringify(this.movies); }

  // get diagnostic2() { return JSON.stringify(this.emotions); }

  
}