import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo7updateComponent } from './demo7update.component';

describe('Demo7updateComponent', () => {
  let component: Demo7updateComponent;
  let fixture: ComponentFixture<Demo7updateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo7updateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo7updateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
