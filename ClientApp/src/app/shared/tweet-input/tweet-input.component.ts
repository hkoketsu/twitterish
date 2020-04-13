import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-tweet-input',
  templateUrl: './tweet-input.component.html',
  styleUrls: ['./tweet-input.component.css']
})
export class TweetInputComponent implements OnInit {
  tweetText: string;
  disabled: boolean;
  @Output() tweetSubject = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onInputChange(value: string) {
    // tslint:disable-next-line: whitespace
    this.tweetText = value;
    this.disabled = this.tweetText === '';
  }

  submit() {
    this.tweetSubject.emit(this.tweetText);
    this.tweetText = '';
  }
}
