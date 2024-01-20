import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMovieApiComponent } from './angular-movie-api.component';

describe('AngularMovieApiComponent', () => {
  let component: AngularMovieApiComponent;
  let fixture: ComponentFixture<AngularMovieApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMovieApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMovieApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
