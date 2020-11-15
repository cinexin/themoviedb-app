import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  searchMovie(searchText: string): void {
    const searchTerm = searchText.trim();
    if (searchTerm.length > 0) {
      console.log(`Search text: ${searchText}`);
    }
    this.router.navigate(['/search', searchTerm]);
  }
}
