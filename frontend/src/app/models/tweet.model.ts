import { Deserializable } from './deserializable.model';

export class Tweet extends Deserializable {
  id: number;
  body: string;
}
