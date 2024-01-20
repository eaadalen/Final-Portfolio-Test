import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactMovieApiComponent } from './react-movie-api.component';

describe('ReactMovieApiComponent', () => {
  let component: ReactMovieApiComponent;
  let fixture: ComponentFixture<ReactMovieApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactMovieApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactMovieApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
