import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExercicioCardComponent } from './add-exercicio-card.component';

describe('AddExercicioCardComponent', () => {
  let component: AddExercicioCardComponent;
  let fixture: ComponentFixture<AddExercicioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExercicioCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExercicioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
