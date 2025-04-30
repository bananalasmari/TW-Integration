import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerLayoutsComponent } from './inner-layouts.component';

describe('InnerLayoutsComponent', () => {
  let component: InnerLayoutsComponent;
  let fixture: ComponentFixture<InnerLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InnerLayoutsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
