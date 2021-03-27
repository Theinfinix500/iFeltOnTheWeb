import { Movie } from './../../models/movie.model';
import { Emotions } from './../../models/emotions';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit{
 
  movies:Movie[]=[]
  emotions:Emotions[]=[]

  constructor(public moviesService:MovieService){}

  ngOnInit(){
    this.emotions = this.moviesService.getEmotions()
    this.movies = this.moviesService.getMovies()
  }
}