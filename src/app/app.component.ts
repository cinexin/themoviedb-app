import { Component } from '@angular/core';
import { NowPlayingResponse } from './interfaces/now-playing-response';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'themoviedb-app';

  constructor(private moviesService: MoviesService) {
    this.moviesService.getNowPlaying().subscribe((data: NowPlayingResponse) => {
      console.log(data);
    },
    (error) => {
      console.log(error)
    });
  }
}
