import { Movie } from './movie';

export interface SearchMoviesResponse {
  results: Movie[];
  total_pages: number;
  total_results: number;
  page: number;
}
