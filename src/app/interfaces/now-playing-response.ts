import { Movie } from './movie';

export interface NowPlayingResponse {
  results: Movie[];
  page: number;
  total_results: number;
  dates: Dates;
  total_pages: number;
}

export interface Dates {
  maximum: Date;
  minimum: Date;
}
