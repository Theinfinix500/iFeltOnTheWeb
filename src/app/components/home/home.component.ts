import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subject } from "rxjs";
import {Movie} from '../models/movie.model'
import {MovieEmotions} from '../models/movieEmotions.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  
  
  n=0;
  movie:Movie;
  movieEmotion:MovieEmotions;
  movieEmotions:MovieEmotions[] = [];
  private moviesUpdated = new Subject<Movie[]>();
  private movieEmotionsUpdated = new Subject<MovieEmotions[]>();

emotions =[
  {name:"happy"},
  {name:"Melancholic"},
  {name:"Optimistic"},
  {name:"Inspired"},
  {name:"Concerned"}
]

movies: Movie [] = [
  // {id:'1', title:"Lost in Translation"},
  // {id:'2', title:"Cashback"},
  // {id:'3', title:"A Single Man"},
  // {id:'4', title:"Happy Go Lucky"},
  // {id:'5', title:"Cinema Paradiso"}
]

ngOnInit(){
  this.getMoviesUpdateListener().subscribe();
  this.getMoviesEmotionUpdateListener().subscribe(data => {
    console.log('data', data)
  });
}

createMovie(form: NgForm) {
    this.movie = {id:this.n,title: form.value.movieTitle};
    this.movies.push(this.movie)
    this.moviesUpdated.next(this.movies)   
    this.n++;
  }

  getMoviesUpdateListener() {
    return this.moviesUpdated.asObservable();
  }

  getMoviesEmotionUpdateListener() {
    return this.movieEmotionsUpdated.asObservable();
  }

  classifyEmotion(form:NgForm){
    this.movieEmotion = {movie:form.value.movie, emotion:form.value.emotion};
    this.movieEmotions.push(this.movieEmotion)
    this.movieEmotionsUpdated.next(this.movieEmotions)
  }




  // get diagnostic() { return JSON.stringify(this.movies); }

  // get diagnostic2() { return JSON.stringify(this.emotions); }

  
}