import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Cast } from '../interfaces/cast';
import { CreditsResponse } from '../interfaces/credits-response';
import { Movie } from '../interfaces/movie';
import { MovieDetailResponse } from '../interfaces/movie-detail-response';
import { NowPlayingResponse } from '../interfaces/now-playing-response';
import { SearchMoviesResponse } from '../interfaces/search-movies-response';

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

  resetPageNum(): void {
    this.page = 1;
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
      map( response => {
        this.totalPages = response.total_pages;
        return response.results;
      }),
      tap(() => {
        if (this.page >= this.totalPages) {
          this.fullyLoaded = true;
        } else {
          this.page += 1;
        }
        this.loading = false;
      })
    );
  }

  search(searchTerm: string): Observable<Movie[]> {
    const url = `${this.baseUrl}/search/movie/`;
    const params = {...this.params, page: 1, query: searchTerm};
    return this.http.get<SearchMoviesResponse>(url, {
      params
    }).pipe(
      map((response) => response.results),
    );
  }

  getMovieDetails(movieId: number): Observable<MovieDetailResponse> {
    return this.http.get<MovieDetailResponse>(`${this.baseUrl}/movie/${movieId}`, {params: this.params})
    .pipe(
      catchError(error => of(null))
    );
  }

  getCast(movieId: number): Observable<Cast[]> {
    return this.http.get<CreditsResponse>(`${this.baseUrl}/movie/${movieId}/credits`, {params: this.params}).pipe(
      map((res: CreditsResponse) => res.cast),
      catchError(error => of([]))
    );
  }
}
