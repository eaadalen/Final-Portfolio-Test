import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestMovieApiComponent } from './rest-movie-api.component';

describe('RestMovieApiComponent', () => {
  let component: RestMovieApiComponent;
  let fixture: ComponentFixture<RestMovieApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestMovieApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestMovieApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
