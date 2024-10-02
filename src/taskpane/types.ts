export interface ValueById<T extends string | number | boolean = string> {
  [uniqueLocalId: string]: T;
}
