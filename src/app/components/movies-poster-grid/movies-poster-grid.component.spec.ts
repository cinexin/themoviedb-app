import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPosterGridComponent } from './movies-poster-grid.component';

describe('MoviesPosterGridComponent', () => {
  let component: MoviesPosterGridComponent;
  let fixture: ComponentFixture<MoviesPosterGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesPosterGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesPosterGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
