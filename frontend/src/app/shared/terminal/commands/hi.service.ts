import { CommandService } from './command.interface';

export class HiService implements CommandService {

  constructor() {  }

  run(): string {
    return 'hello';
  }
}
