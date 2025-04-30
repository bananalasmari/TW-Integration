import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocuemntsDetailsComponent } from './docuemnts-details.component';

describe('DocuemntsDetailsComponent', () => {
  let component: DocuemntsDetailsComponent;
  let fixture: ComponentFixture<DocuemntsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocuemntsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocuemntsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
