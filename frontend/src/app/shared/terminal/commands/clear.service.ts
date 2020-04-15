import { Command } from './command.interface';

export class ClearService implements Command {

  constructor() {  }

  run(): string {
    return '';
  }

}
