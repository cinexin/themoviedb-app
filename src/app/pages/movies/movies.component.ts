import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailResponse } from 'src/app/interfaces/movie-detail-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movieDetail: MovieDetailResponse;

  constructor(
    private activatedRoute: ActivatedRoute,
    public moviesService: MoviesService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    const movieId = this.activatedRoute.snapshot.params.id;
    this.fetchMovieDetails(movieId);
    console.log(`Movie Id: ${movieId}`);
  }

  fetchMovieDetails(movieId: number): void {
    this.moviesService.getMovieDetails(movieId).subscribe(movieDetails => {
      this.movieDetail = movieDetails;
      console.log(`Movie details: ${this.movieDetail}`);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
