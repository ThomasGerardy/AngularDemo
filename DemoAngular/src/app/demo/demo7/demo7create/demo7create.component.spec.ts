import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo7createComponent } from './demo7create.component';

describe('Demo7createComponent', () => {
  let component: Demo7createComponent;
  let fixture: ComponentFixture<Demo7createComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo7createComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo7createComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
