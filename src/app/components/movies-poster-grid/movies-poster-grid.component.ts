import { Component, Input, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
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

  onRate($event: {oldValue: number, newValue: number, starRating: StarRatingComponent}): void {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}
