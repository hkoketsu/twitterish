import { Deserializable } from './deserializable.model';

export class ApiCommand extends Deserializable {
  keyCommand: string;
  responseClass: string;
}
