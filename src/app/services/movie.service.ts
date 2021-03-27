import { Movie } from '../models/movie.model';
import { Emotions } from './../models/emotions';
import { Injectable } from '@angular/core';


@Injectable({providedIn:"root"})

export class MovieService{

    movies:Movie[] = []

    emotions:Emotions[] = [
        {emotion:"happy"},
        {emotion:"sadness"},
        {emotion:"fear"},
        {emotion:"anger"},
        {emotion:"disgut"},
        {emotion:"surprise"}
    ]

    getEmotions(){
        return this.emotions;
    }

    addMovie(movie){
        this.movies.push(movie)
    }
    
    getMovies(){
        return this.movies;
    }
}