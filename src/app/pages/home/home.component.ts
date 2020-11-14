import { Component, OnInit } from '@angular/core';
import { Movie, NowPlayingResponse } from '../../interfaces/now-playing-response';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.moviesService.getNowPlaying().subscribe((data: NowPlayingResponse) => {
      console.log(data);
      this.movies = data.results;
    },
    (error) => {
      console.log(error);
    });
  }

}
