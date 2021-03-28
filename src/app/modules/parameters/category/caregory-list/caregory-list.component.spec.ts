import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregoryListComponent } from './caregory-list.component';

describe('CaregoryListComponent', () => {
  let component: CaregoryListComponent;
  let fixture: ComponentFixture<CaregoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaregoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
