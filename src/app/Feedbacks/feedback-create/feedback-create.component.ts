import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback-create',
  templateUrl: './feedback-create.component.html',
  styleUrls: ['./feedback-create.component.css']
})
export class FeedbackCreateComponent implements OnInit {

  feedbackData = {
    title: '',
    description: '',
    category: ''
  };

  ngOnInit(): void {
  }
  constructor(private feedbackService: FeedbackService) {}

  submitFeedback() {
    this.feedbackService.createFeedback(this.feedbackData).subscribe(
      (response) => {
        console.log('Feedback created successfully:', response);
        // Handle success, e.g., show a success message or navigate to a different page
      },
      (error) => {
        console.error('Error creating feedback:', error);
        // Handle error, e.g., show an error message
      }
    );
  }

}
