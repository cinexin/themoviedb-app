import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movies: Movie[] = [];
  searchTerm = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.searchTerm  = params.text;
      this.moviesService.search(this.searchTerm).subscribe(movies => {
        this.movies = movies;
      });
    });
  }

  ngOnInit(): void {
  }

}
