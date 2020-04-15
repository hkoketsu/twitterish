import { Command } from './command.interface';
import { ElementRef, Injectable } from '@angular/core';
import { CommandItem } from 'src/app/models/command-item.model';

@Injectable({
  providedIn: 'root'
})
export class EmptyCommand implements Command {

  constructor() {  }

  run(command: string, el: ElementRef, history: CommandItem[]) {
    history.push({
      command: '',
      result: null
    });
    el.nativeElement.innerText = '';
    return history;
  }
}
