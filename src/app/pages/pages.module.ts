import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [HomeComponent, MoviesComponent, SearchComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
