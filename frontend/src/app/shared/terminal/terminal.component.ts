import { ColorService } from '../../services/color.service';
import { TweetService } from '../../services/tweet.service';
import { Component, OnInit } from '@angular/core';

export interface CommandItem {
  command: string;
  result: string;
}
@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {
  backgroundColor: string;
  textColor: string;
  history: CommandItem[] = [];

  constructor(private tweetService: TweetService, private colorService: ColorService) { }

  ngOnInit(): void {
    this.colorService.backgroundColor.subscribe(
      color => this.backgroundColor = color
    );
    this.colorService.textColor.subscribe(
      color => this.textColor = color
    );
  }

  onEnter(contenteditable: HTMLElement) {
    const command = contenteditable.innerText
        .trim().replace(/\s\s+/g, ' ')
        .split('\n').join('')
        .split('\\>').join('');

    console.log(command);

    if (command.slice(command.length - 1) === '\\') {
      const linedText = contenteditable.innerText  += '\n>';
      contenteditable.innerText = linedText.trim();
      return;
    }
    if (command === '' || command === ' ') {
      this.history.push({
        command: '',
        result: null
      });
      contenteditable.innerText = '';
      return;
    }
    if (command === 'clear') {
      this.history = [];
      contenteditable.innerText = '';
      return;
    }

    const newItem: CommandItem = {
      command: command,
      result: command
    };
    this.history.push(newItem);
    contenteditable.innerText = '';
  }
}
