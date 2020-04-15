import { LineBreak } from './line-break.command';
import { Empty } from './empty.command';
import { Clear } from './clear.command';
import { Hi } from './hi.command';
import { Invalid } from './invalid.command';

export const commandList = {
  'Hi': new Hi(),
  'Clear': new Clear(),
  'Empty': new Empty(),
  'LineBreak': new LineBreak(),
  'Invalid': new Invalid()
};
