import { Component, OnInit } from '@angular/core';
import { Tweet } from '../shared/tweet/tweet.model';
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
}
