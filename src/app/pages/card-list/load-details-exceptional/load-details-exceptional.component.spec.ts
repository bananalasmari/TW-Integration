import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDetailsExceptionalComponent } from './load-details-exceptional.component';

describe('LoadDetailsExceptionalComponent', () => {
  let component: LoadDetailsExceptionalComponent;
  let fixture: ComponentFixture<LoadDetailsExceptionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadDetailsExceptionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadDetailsExceptionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
