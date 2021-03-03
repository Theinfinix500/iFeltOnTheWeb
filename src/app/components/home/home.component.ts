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

  classifyEmotion(chooseEmotion:HTMLSelectElement){
    console.log(chooseEmotion)
    this.movie=this.choosenMovie;
    this.emotion=chooseEmotion.value;
  }



}
