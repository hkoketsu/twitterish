import { Command } from './command.interface';
import { ElementRef, Injectable } from '@angular/core';
import { CommandItem } from 'src/app/models/command-item.model';

@Injectable({
  providedIn: 'root'
})
export class HiCommand implements Command {

  constructor() {  }

  run(command: string, el: ElementRef, history: CommandItem[]) {
    const newItem: CommandItem = {
      command: command,
      result: 'Hello'
    };
    history.push(newItem);
    el.nativeElement.innerText = '';
    return history;
  }
}
