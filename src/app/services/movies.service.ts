import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NowPlayingResponse } from '../interfaces/now-playing-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient,
  ) { }

  getNowPlaying(): Observable<NowPlayingResponse> {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=2efa553fe649d30ce61733c0767e9ac3&language=es-ES&region=ES`;
    return this.http.get<NowPlayingResponse>(url);
  }
}
