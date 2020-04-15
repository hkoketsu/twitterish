import { Empty } from './empty.command';
import { Clear } from './clear.command';
import { Hi } from './hi.command';

export const commandList = {
  'Hi': new Hi(),
  'Clear': new Clear(),
  'Empty': new Empty()
};
