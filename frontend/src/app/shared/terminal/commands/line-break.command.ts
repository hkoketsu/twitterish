import { Command } from './command.interface';
import { ElementRef, Injectable } from '@angular/core';
import { CommandItem } from 'src/app/models/command-item.model';

@Injectable({
  providedIn: 'root'
})
export class LineBreakCommand implements Command {

  constructor() {  }

  run(command: string, el: ElementRef, history: CommandItem[]) {
    el.nativeElement.innerText = el.nativeElement.innerText // format the input
      .replace(/\s\s+/g, ' ').trim()
      .split('\n').join('')
      .split('<br>').join('') // remove break lines
      .split('\\>').join('') + '\n>'; // remove multiple whitespaces
    return history;
  }
}
