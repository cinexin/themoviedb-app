import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
import { Movie } from 'src/app/interfaces/movie';


@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css']
})
export class MoviesPosterGridComponent implements OnInit {

  @Input() movies: Movie[] = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log(this.movies);
  }

  onRate($event: {oldValue: number, newValue: number, starRating: StarRatingComponent}): void {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  openMovieDetail(movie: Movie): void {
    this.router.navigate(['/movie', movie.id]);
  }
}
