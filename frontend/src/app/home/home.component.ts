import { Component, OnInit, Injectable } from '@angular/core';
import { Tweet } from '../models/tweet.model';
import { TweetService } from '../services/tweet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tweets: Tweet[];

  constructor(private tweetService: TweetService) {}

  ngOnInit() {
    this.loadTweets();
    this.tweetService.isLatest.subscribe(isLatest => { // for tweet from modal
      if (!isLatest) {
        this.loadTweets();
      }
    });
  }

  loadTweets() {
    this.tweetService.getTweets().subscribe((data: Tweet[]) => {
      this.tweets = data;
      this.tweetService.isTimelineLatest(true);
    });
  }

  postTweet(tweetText: string) {
    this.tweetService.createTweet(tweetText)
      .subscribe(res => {
        this.loadTweets();
      });
  }
}
