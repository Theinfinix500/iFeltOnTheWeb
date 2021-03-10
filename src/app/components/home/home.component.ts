import { Component, OnInit } from '@angular/core';

import {Movie} from '../models/movie.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

emotions =[
  {name:"happy"},
  {name:"Melancholic"},
  {name:"Optimistic"},
  {name:"Inspired"},
  {name:"Concerned"}
]


movies: Movie [] = [
  {id:1, title:"Lost in Translation"},
  {id:2, title:"Cashback"},
  {id:3, title:"A Single Man"},
  {id:4, title:"Happy Go Lucky"},
  {id:4, title:"Cinema Paradiso"}
]


   classifyEmotion(){
    
  }



}