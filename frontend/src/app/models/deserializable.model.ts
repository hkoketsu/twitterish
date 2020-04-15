export class Deserializable {
  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
