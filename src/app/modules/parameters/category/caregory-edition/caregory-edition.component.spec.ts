import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregoryEditionComponent } from './caregory-edition.component';

describe('CaregoryEditionComponent', () => {
  let component: CaregoryEditionComponent;
  let fixture: ComponentFixture<CaregoryEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaregoryEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregoryEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
