import { Deserializable } from './deserializable.model';

export class Tweet implements Deserializable {
  id: number;
  body: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
