import { Component, OnInit } from '@angular/core';

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


movies = [
  {title:"Lost in Translation"},
  {title:"Cashback"},
  {title:"A Single Man"},
  {title:"Happy Go Lucky"},
  {title:"Cinema Paradiso"}
]
 
  constructor() {

   }



   classifyEmotion(){
    
  }



}
