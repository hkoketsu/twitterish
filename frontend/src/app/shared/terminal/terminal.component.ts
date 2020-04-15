import { ColorService } from '../../services/color.service';
import { TweetService } from '../../services/tweet.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('cliInput') input: ElementRef;

  terminalOn: boolean;

  constructor(
    private tweetService: TweetService,
    private colorService: ColorService,
    private terminalService: TerminalService) { }

  ngOnInit() {
    this.colorService.backgroundColor.subscribe(
      value => this.backgroundColor = value
    );
    this.colorService.textColor.subscribe(
      value => this.textColor = value
    );
    this.terminalService.terminalOn.subscribe(value => {
      this.terminalOn = value;
      if (this.terminalOn) {
        setTimeout(() => {
          this.focusOnInput();
        }, 100);
      }
    });
  }

  onEnter() {
    const command = this.input.nativeElement.innerText
        .trim().replace(/\s\s+/g, ' ')
        .split('\n').join('')
        .split('\\>').join('');

    console.log(command);

    if (command.slice(command.length - 1) === '\\') {
      const linedText = this.input.nativeElement.innerText  += '\n>';
      this.input.nativeElement.innerText = linedText.trim();
      return;
    }
    if (command === '' || command === ' ') {
      this.history.push({
        command: '',
        result: null
      });
      this.input.nativeElement.innerText = '';
      return;
    }
    if (command === 'clear') {
      this.history = [];
      this.input.nativeElement.innerText = '';
      return;
    }

    const newItem: CommandItem = {
      command: command,
      result: command
    };
    this.history.push(newItem);
    this.input.nativeElement.innerText = '';
  }

  focusOnInput() {
    this.input.nativeElement.focus();
  }
}
