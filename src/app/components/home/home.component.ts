import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

emotion = ''
movie ='';
choosenMovie='';
choosenEmotion=''
  
  constructor() { }

  classifyEmotion(choosenMovie:HTMLSelectElement){
    this.emotion=this.choosenEmotion;
    this.movie=choosenMovie.value;
  }



}
