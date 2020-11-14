import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [HomeComponent, MoviesComponent, SearchComponent],
  imports: [
    CommonModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
