import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Movie, NowPlayingResponse } from '../interfaces/now-playing-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKey = '2efa553fe649d30ce61733c0767e9ac3';
  private lang = 'es-ES';
  private region = 'ES';
  private page = 1;
  private totalPages = 1;
  public fullyLoaded = false;
  public loading = false;

  constructor(
    private http: HttpClient,
  ) { }

  get params(): any {
    return {
      api_key: this.apiKey,
      language: this.lang,
      region: this.region,
      page: this.page,
    };
  }

  getNowPlaying(): Observable<Movie[]> {
    if (this.loading) {
      return of([]);
    }

    const url = `${this.baseUrl}/movie/now_playing`;
    console.log('Calling API...');
    this.loading = true;
    return this.http.get<NowPlayingResponse>(url, {params: this.params})
    .pipe(
      tap(() => {
        this.page += 1;
        if (this.page === this.totalPages) {
          this.fullyLoaded = true;
        }
        this.loading = false;
      }),
      map( response => {
        this.totalPages = response.total_pages;
        return response.results;
      })
    );
  }
}
