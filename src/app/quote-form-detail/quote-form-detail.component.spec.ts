import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteFormDetailComponent } from './quote-form-detail.component';

describe('QuoteFormDetailComponent', () => {
  let component: QuoteFormDetailComponent;
  let fixture: ComponentFixture<QuoteFormDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteFormDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteFormDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
