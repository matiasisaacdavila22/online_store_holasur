import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregoryCreationComponent } from './caregory-creation.component';

describe('CaregoryCreationComponent', () => {
  let component: CaregoryCreationComponent;
  let fixture: ComponentFixture<CaregoryCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaregoryCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregoryCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
