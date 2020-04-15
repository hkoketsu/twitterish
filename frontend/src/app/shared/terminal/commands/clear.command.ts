import { CommandService } from './command.interface';
import { ElementRef } from '@angular/core';
import { CommandItem } from 'src/app/models/command-item.model';

export class Clear implements CommandService {

  constructor() {  }

  run(command: string, el: ElementRef, history: CommandItem[]) {
    el.nativeElement.innerText = '';
    return [];
  }
}
