import { Component, HostListener, OnInit } from '@angular/core';
import { Movie, NowPlayingResponse } from '../../interfaces/now-playing-response';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];
  moviesSlideShow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const threshold = 1300;
    const position = (document.documentElement.scrollTop || document.body.scrollTop) + threshold;
    const maxPosition = document.documentElement.scrollHeight || document.body.scrollHeight;

    if (position > maxPosition) {
      if (!this.moviesService.loading && !this.moviesService.fullyLoaded) {
        this.moviesService.getNowPlaying().subscribe((response: Movie[]) => {
          this.movies.push(...response);
        });
      }
    }
  }

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.moviesService.getNowPlaying().subscribe((data: Movie[]) => {
      console.log(data);
      this.movies = data;
      this.moviesSlideShow = data;
    },
    (error) => {
      console.log(error);
    });
  }

}
