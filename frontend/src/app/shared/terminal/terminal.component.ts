import { ColorService } from '../../services/color.service';
import { TweetService } from '../../services/tweet.service';
import { Component, OnInit } from '@angular/core';
import { TerminalService } from 'src/app/services/terminal.service';

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
  input: HTMLElement;

  terminalOn: boolean;

  constructor(
    private tweetService: TweetService,
    private colorService: ColorService,
    private terminalService: TerminalService) { }

  ngOnInit() {
    this.input = document.getElementById('cli-input');
    this.colorService.backgroundColor.subscribe(
      value => this.backgroundColor = value
    );
    this.colorService.textColor.subscribe(
      value => this.textColor = value
    );
    this.terminalService.terminalOn.subscribe(
      value => this.terminalOn = value
    );
  }

  onEnter() {
    const command = this.input.innerText
        .trim().replace(/\s\s+/g, ' ')
        .split('\n').join('')
        .split('\\>').join('');

    console.log(command);

    if (command.slice(command.length - 1) === '\\') {
      const linedText = this.input.innerText  += '\n>';
      this.input.innerText = linedText.trim();
      return;
    }
    if (command === '' || command === ' ') {
      this.history.push({
        command: '',
        result: null
      });
      this.input.innerText = '';
      return;
    }
    if (command === 'clear') {
      this.history = [];
      this.input.innerText = '';
      return;
    }

    const newItem: CommandItem = {
      command: command,
      result: command
    };
    this.history.push(newItem);
    this.input.innerText = '';
  }

  focusOnInput() {
    this.input.focus();
  }
}
