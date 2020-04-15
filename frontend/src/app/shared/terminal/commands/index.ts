import { NewTweetCommand } from './new-tweet.command';
import { LineBreakCommand } from './line-break.command';
import { EmptyCommand } from './empty.command';
import { ClearCommand } from './clear.command';
import { HiCommand } from './hi.command';
import { InvalidCommand } from './invalid.command';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandIndex {
  constructor(
    private hiCommad: HiCommand,
    private clearCommand: ClearCommand,
    private emptyCommand: EmptyCommand,
    private linebreakCommand: LineBreakCommand,
    private newTweetCommand: NewTweetCommand,
    private invlaidCommand: InvalidCommand
  ) {}

  commands = {
    'Hi': this.hiCommad,
    'Clear': this.clearCommand,
    'Empty': this.emptyCommand,
    'LineBreak': this.linebreakCommand,
    'Invalid': this.invlaidCommand,
    'NewTweet': this.newTweetCommand
  };
}

