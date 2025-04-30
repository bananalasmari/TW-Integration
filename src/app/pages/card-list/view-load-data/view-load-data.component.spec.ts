import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoadDataComponent } from './view-load-data.component';

describe('ViewLoadDataComponent', () => {
  let component: ViewLoadDataComponent;
  let fixture: ComponentFixture<ViewLoadDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewLoadDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLoadDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
