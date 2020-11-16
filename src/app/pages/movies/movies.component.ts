import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from 'src/app/interfaces/cast';
import { MovieDetailResponse } from 'src/app/interfaces/movie-detail-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movieDetail: MovieDetailResponse;
  cast: Cast[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    public moviesService: MoviesService,
    private location: Location,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const movieId = this.activatedRoute.snapshot.params.id;
    this.fetchMovieDetails(movieId);
  }

  private backToHome(): void {
    this.router.navigateByUrl('/home');
  }

  fetchMovieDetails(movieId: number): void {
    this.moviesService.getMovieDetails(movieId).subscribe(movieDetails => {
      if (!movieDetails) {
        this.backToHome();
        return;
      }
      this.movieDetail = movieDetails;
    });
    this.moviesService.getCast(movieId).subscribe(castDetails => {
      this.cast = castDetails;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
