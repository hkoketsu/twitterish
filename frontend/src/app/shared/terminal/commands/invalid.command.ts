import { Command } from './command.interface';
import { ElementRef, Injectable } from '@angular/core';
import { CommandItem } from 'src/app/models/command-item.model';

@Injectable({
  providedIn: 'root'
})
export class InvalidCommand implements Command {

  constructor() {  }

  run(command: string, el: ElementRef, history: CommandItem[]) {
    const newItem: CommandItem = {
      command: command,
      result: 'Invalid command!'
    };
    history.push(newItem);
    el.nativeElement.innerText = '';
    return history;
  }
}
