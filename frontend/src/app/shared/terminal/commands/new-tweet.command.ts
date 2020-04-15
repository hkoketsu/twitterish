import { Tweet } from './../../../models/tweet.model';
import { TweetService } from 'src/app/services/tweet.service';
import { Command } from './command.interface';
import { ElementRef, Injectable } from '@angular/core';
import { CommandItem } from 'src/app/models/command-item.model';

@Injectable({
  providedIn: 'root'
})
export class NewTweetCommand implements Command {

  constructor(private tweetService: TweetService) {  }

  async run(command: string, el: ElementRef, history: CommandItem[], additionalLabel: string, additionalInfo: string) {
    if (additionalLabel) {
      console.log(additionalInfo);
      const newTweet = await this.tweetService.createTweet(additionalInfo).toPromise();
      const commandItem = {
        command: command,
        result: `tweet successful!: ${newTweet.body}`
      };
      history.push(commandItem);
      this.tweetService.isTimelineLatest(false);
      el.nativeElement.innerText = '';
      return history;
    } else {
      const newItem: CommandItem = {
        command: command,
        result: '',
        additionalLabel: 'Write your tweet'
      };
      history.push(newItem);
      el.nativeElement.innerText = '';
      return history;
    }
  }
}
