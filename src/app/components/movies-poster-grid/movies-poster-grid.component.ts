import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/now-playing-response';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css']
})
export class MoviesPosterGridComponent implements OnInit {

  @Input() movies: Movie[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.movies);
  }

}
