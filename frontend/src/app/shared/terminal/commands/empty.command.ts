import { CommandService } from './command.interface';
import { ElementRef } from '@angular/core';
import { CommandItem } from 'src/app/models/command-item.model';

export class Empty implements CommandService {

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
