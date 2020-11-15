import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[] = [];

  private moviesSwipper: Swiper;

  constructor() { }

  ngAfterViewInit(): void {
    this.moviesSwipper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      autoplay: true,
    });
  }

  onSlide(direction: string): void {
    if (this.moviesSwipper) {
      switch (direction) {
        case 'next':
          this.moviesSwipper.slideNext();
          break;
        case 'prev':
          this.moviesSwipper.slidePrev();
          break;
        default:
          this.moviesSwipper.slideNext();
          break;
      }
    }
  }

  ngOnInit(): void {
  }

}
