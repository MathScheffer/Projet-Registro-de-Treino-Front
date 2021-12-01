import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioCardComponent } from './exercicio-card.component';

describe('ExercicioCardComponent', () => {
  let component: ExercicioCardComponent;
  let fixture: ComponentFixture<ExercicioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
