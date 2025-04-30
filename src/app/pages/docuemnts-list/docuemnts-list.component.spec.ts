import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocuemntsListComponent } from './docuemnts-list.component';

describe('DocuemntsListComponent', () => {
  let component: DocuemntsListComponent;
  let fixture: ComponentFixture<DocuemntsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocuemntsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocuemntsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
