import { Deserializable } from './deserializable.model';

export class Command extends Deserializable {
  keyCommand: string;
  responseClass: string;
}
