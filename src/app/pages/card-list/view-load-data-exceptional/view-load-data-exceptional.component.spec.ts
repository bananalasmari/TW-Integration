import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoadDataExceptionalComponent } from './view-load-data-exceptional.component';

describe('ViewLoadDataExceptionalComponent', () => {
  let component: ViewLoadDataExceptionalComponent;
  let fixture: ComponentFixture<ViewLoadDataExceptionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewLoadDataExceptionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLoadDataExceptionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
