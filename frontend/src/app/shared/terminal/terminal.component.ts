import { CommandService } from './commands/command.interface';
import { ColorService } from '../../services/color.service';
import { TweetService } from '../../services/tweet.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TerminalService } from 'src/app/services/terminal.service';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { Command } from 'src/app/models/command.model';
import { commandList } from './commands';

export interface CommandItem {
  command: string;
  result: string;
}
@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({opacity: 1})),
      state('closed', style({opacity: 0})),
      transition('open => closed', [animate('0.1s')]),
      transition('closed => open', [animate('0.3s')]),
    ]),
  ]
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
    this.subscribeTerminalColor();
    this.subscribeTerminalSwitch();
  }

  onEnter() {
    const command = this.input.nativeElement.innerText
        .trim().replace(/\s\s+/g, ' ')
        .split('\n').join('')
        .split('\\>').join('');

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

    this.terminalService.getCommandResponse(command).subscribe(
      (res: Command) => {
        const serviceClassName = res.responseClass;
        const commandService: CommandService = commandList[serviceClassName];
        const newItem: CommandItem = {
          command: command,
          result: commandService.run()
        };
        this.history.push(newItem);
      },
      error => console.log(error)
    );
    this.input.nativeElement.innerText = '';
  }

  focusOnInput() {
    this.input.nativeElement.focus();
  }

  private subscribeTerminalColor() {
    this.colorService.backgroundColor.subscribe(
      value => this.backgroundColor = value
    );
    this.colorService.textColor.subscribe(
      value => this.textColor = value
    );
  }

  private subscribeTerminalSwitch() {
    this.terminalService.terminalOn.subscribe(value => {
      this.terminalOn = value;
      if (this.terminalOn) {
        setTimeout(() => this.focusOnInput(), 200);
      }
    });
  }
}
