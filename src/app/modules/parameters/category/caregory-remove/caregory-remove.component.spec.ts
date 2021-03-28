import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregoryRemoveComponent } from './caregory-remove.component';

describe('CaregoryRemoveComponent', () => {
  let component: CaregoryRemoveComponent;
  let fixture: ComponentFixture<CaregoryRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaregoryRemoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregoryRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
