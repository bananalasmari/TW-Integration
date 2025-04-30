import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCardsButtonComponent } from './view-cards-button.component';

describe('ViewCardsButtonComponent', () => {
  let component: ViewCardsButtonComponent;
  let fixture: ComponentFixture<ViewCardsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewCardsButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCardsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
