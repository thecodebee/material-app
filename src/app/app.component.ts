import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    {
      saying: "If you don't like how things are, change it! You're not a tree.",
      author: "Jim Rohn"
    },
    {
      saying: "If you are not willing to risk the unusual, you will have to settle for the ordinary.",
      author: "Jim Rohn"
    },
    {
      saying: "Discipline is the bridge between goals and accomplishment.",
      author: "Jim Rohn"
    },
    {
      saying: "Take care of your body. It's the only place you have to live.",
      author: "Jim Rohn"
    },
    {
      saying: "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
      author: "Jim Rohn"
    },
    {
      saying: "Happiness is not something you postpone for the future; it is something you design for the present.",
      author: "Jim Rohn"
    },
    {
      saying: "Affirmation without discipline is the beginning of delusion.",
      author: "Jim Rohn"
    }
  ];
}
