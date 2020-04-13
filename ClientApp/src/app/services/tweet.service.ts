import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tweet } from '../shared/tweet/tweet.model';

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

  createTweet(tweet: Tweet) {
    return this.http.post(this.apiUrl, tweet);
  }
}
