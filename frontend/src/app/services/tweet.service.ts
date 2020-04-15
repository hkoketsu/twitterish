import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tweet } from '../models/tweet.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  private apiUrl: string;
  tweets: Tweet[];
  private loadSubject = new BehaviorSubject(false);
  isLatest = this.loadSubject.asObservable();

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string) {
    this.apiUrl = baseUrl + 'tweet/';
  }

  getTweets() {
    return this.http.get(this.apiUrl);
  }

  getTweetById(id: number) {
    return this.http.get(this.apiUrl + id);
  }

  createTweet(text: string): Observable<Tweet> {
    const newTweet = new Tweet();
    newTweet.body = text;
    return this.http.post<Tweet>(this.apiUrl, newTweet);
  }

  isTimelineLatest(isLatest: boolean) {
    this.loadSubject.next(isLatest);
  }
}
