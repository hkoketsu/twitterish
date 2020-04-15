import { CommandService } from './command.interface';
import { ElementRef } from '@angular/core';
import { CommandItem } from 'src/app/models/command-item.model';

export class LineBreak implements CommandService {

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
