import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterLayoutsComponent } from './outer-layouts.component';

describe('OuterLayoutsComponent', () => {
  let component: OuterLayoutsComponent;
  let fixture: ComponentFixture<OuterLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OuterLayoutsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuterLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
