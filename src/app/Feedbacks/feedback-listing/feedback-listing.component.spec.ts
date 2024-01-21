import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackListingComponent } from './feedback-listing.component';

describe('FeedbackListingComponent', () => {
  let component: FeedbackListingComponent;
  let fixture: ComponentFixture<FeedbackListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
