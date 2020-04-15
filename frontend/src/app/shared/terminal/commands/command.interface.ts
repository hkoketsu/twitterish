import { CommandItem } from './../../../models/command-item.model';
import { ElementRef } from '@angular/core';
export interface CommandService {
  run(command: string, el: ElementRef, history: CommandItem[]): CommandItem[];
}
