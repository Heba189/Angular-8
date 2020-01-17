import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComComponent } from './movies-com.component';

describe('MoviesComComponent', () => {
  let component: MoviesComComponent;
  let fixture: ComponentFixture<MoviesComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
