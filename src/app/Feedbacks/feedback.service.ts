import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private apiUrl = environment.BASE_URL;
  constructor(private http: HttpClient) {}

  getFeedbacks() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });

    return this.http.get(`${this.apiUrl}/feedbacks`, { headers });
  }

  createFeedback(feedbackData: any){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    console.log(feedbackData) ;

    return this.http.post(`${this.apiUrl}/feedbacks`, feedbackData,{ headers });
  }
}
