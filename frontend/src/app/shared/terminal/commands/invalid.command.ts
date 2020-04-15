import { CommandService } from './command.interface';
import { ElementRef } from '@angular/core';
import { CommandItem } from 'src/app/models/command-item.model';

export class Invalid implements CommandService {

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
