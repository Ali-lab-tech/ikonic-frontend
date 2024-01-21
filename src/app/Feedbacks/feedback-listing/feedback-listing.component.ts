import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback-listing',
  templateUrl: './feedback-listing.component.html',
  styleUrls: ['./feedback-listing.component.css']
})
export class FeedbackListingComponent implements OnInit {
  feedbacks: any[] = [];

  constructor(private feedbackService: FeedbackService) {}
  ngOnInit(): void {
    this.loadFeedbacks();
  }

  loadFeedbacks() {
    this.feedbackService.getFeedbacks().subscribe(
      (response: any) => {
        console.log('response',response.data.data);

        this.feedbacks = response.data.data; // Assuming your API response has a 'data' property
      },
      (error) => {
        console.error('Error loading feedbacks:', error);
      }
    );
  }

}
