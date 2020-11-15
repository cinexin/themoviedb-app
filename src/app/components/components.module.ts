import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [NavbarComponent, SlideshowComponent, MoviesPosterGridComponent],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule,
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    MoviesPosterGridComponent,
  ]
})
export class ComponentsModule { }
