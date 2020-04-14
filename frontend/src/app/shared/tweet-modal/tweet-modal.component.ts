import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TweetService } from 'src/app/services/tweet.service';
import { Router } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';


@Component({
  selector: 'app-tweet-modal',
  templateUrl: './tweet-modal.component.html',
  styleUrls: ['./tweet-modal.component.css']
})
export class TweetModalComponent {

  constructor(
    public activeModal: NgbActiveModal,
    private tweetService: TweetService,
    private router: Router) {}


  postTweet(tweetText: string) {
    this.tweetService.createTweet(tweetText)
      .subscribe(res => {
        this.activeModal.close();
        this.router.navigate(['/']);
        this.tweetService.isTimelineLatest(false);
      });
  }
}
