import { CommandIndex } from './commands/index';
import { ColorService } from '../../services/color.service';
import { TweetService } from '../../services/tweet.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TerminalService } from 'src/app/services/terminal.service';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { ApiCommand } from 'src/app/models/api-command.model';
import { CommandItem } from 'src/app/models/command-item.model';
import { Command } from './commands/command.interface';


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
  additionalLabel: string;

  history: CommandItem[] = [];
  @ViewChild('cliInput') input: ElementRef;

  terminalOn: boolean;

  constructor(
    private tweetService: TweetService,
    private colorService: ColorService,
    private terminalService: TerminalService,
    private commandIndex: CommandIndex) { }

  ngOnInit() {
    this.subscribeTerminalColor();
    this.subscribeTerminalSwitch();
  }

  onEnter() {
    const inputContext = this.input.nativeElement.innerText // format the input
      .trim().replace(/\s\s+/g, ' ') // remove multiple whitespaces
      .split('\n').join('') // remove break lines
      .split('\\>').join('');

    let command: string, additionalInfo: string;

    if (this.additionalLabel) {
      command = this.history[this.history.length - 1].command;
      additionalInfo = inputContext;
    } else {
      command = inputContext;
    }

    if (inputContext.slice(inputContext.length - 1) === '\\') { // create new line
      command = 'line-break';
    } else if (inputContext === '' || inputContext === ' ') {
      command = 'empty';
    }
    this.terminalService.getCommandResponse(command).subscribe(
      async (res: ApiCommand) => {
        const serviceClassName = res.responseClass;
        const commandScript: Command = this.commandIndex.commands[serviceClassName];
        this.history = await commandScript.run(command, this.input, this.history, this.additionalLabel, additionalInfo);
        console.log(this.history.length);
        this.additionalLabel = this.history[this.history.length - 1].additionalLabel;
      },
      async error => {
        const commandScript: Command = this.commandIndex.commands['Invalid'];
        this.history = await commandScript.run(command, this.input, this.history);
      }
    );
  }

  async onAbort() {
    const commandScript: Command = this.commandIndex.commands['Empty'];
    this.history = await commandScript.run('', this.input, this.history);
    this.additionalLabel = null;
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
