import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tweet } from '../models/tweet.model';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  private apiUrl: string;
  tweets: Tweet[];

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string) {
    this.apiUrl = baseUrl + 'api/tweet';
  }

  getTweets() {
    return this.http.get(this.apiUrl);
  }

  getTweetById(id: number) {
    return this.http.get(this.apiUrl + id);
  }

  createTweet(text: string) {
    const newTweet = new Tweet();
    newTweet.body = text;
    return this.http.post(this.apiUrl, newTweet);
  }
}
