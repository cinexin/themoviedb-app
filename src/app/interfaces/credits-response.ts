import { Cast } from './cast';

export interface CreditsResponse {
  id: number;
  cast: Cast[];
  crew: Cast[];
}
