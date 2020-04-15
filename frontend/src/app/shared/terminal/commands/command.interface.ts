import { CommandItem } from 'src/app/models/command-item.model';
import { ElementRef } from '@angular/core';


export interface Command {
  run(
    command: string,
    el: ElementRef,
    history: CommandItem[],
    additionalLabel?: string,
    additionalInfo?: string
  ): CommandItem[] | Promise<CommandItem[]>;
}
