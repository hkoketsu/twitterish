import { Component, OnInit } from '@angular/core';
import { Tweet } from '../models/tweet.model';
import { TweetService } from '../services/tweet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tweets: Tweet[];

  constructor(private tweetService: TweetService) {}

  ngOnInit() {
    this.loadTweets();
  }

  loadTweets() {
    this.tweetService.getTweets().subscribe((data: Tweet[]) => {
      this.tweets = data;
    });
  }

  postTweet(tweetText: string) {
    console.log('post tweet');
    this.tweetService.createTweet(tweetText)
      .subscribe(res => {
        console.log('submitted');
        console.log(res);
        this.loadTweets();
      });
  }
}
