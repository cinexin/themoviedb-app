import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
  ) {
    this.activatedRoute.params.subscribe(params => {
      const searchTerm = params.text;
      this.moviesService.search(searchTerm).subscribe(movies => {
        console.log(movies);
      });
    });
  }

  ngOnInit(): void {
  }

}
