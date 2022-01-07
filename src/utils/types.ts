import { Except } from 'type-fest';

/**
 * Make all properties in T non nullable
 */
type NonNullableExtended<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};

/**
 * Make selected properties in T non nullable
 */
export type SetNonNullable<BaseType, Keys extends keyof BaseType> = Except<
  BaseType,
  Keys
> &
  NonNullableExtended<Pick<BaseType, Keys>>;

// the following helpers are used to get a typed Object.entries
// from: https://stackoverflow.com/a/69019874
type ObjectType = Record<PropertyKey, unknown>;
type PickByValue<OBJ_T, VALUE_T> = Pick<
  // From https://stackoverflow.com/a/55153000
  OBJ_T,
  { [K in keyof OBJ_T]: OBJ_T[K] extends VALUE_T ? K : never }[keyof OBJ_T]
>;
type ObjectEntries<OBJ_T> = {
  // From https://stackoverflow.com/a/60142095
  [K in keyof OBJ_T]: [keyof PickByValue<OBJ_T, OBJ_T[K]>, OBJ_T[K]];
}[keyof OBJ_T][];

// Function
export function getTypedObjectEntries<OBJ_T extends ObjectType>(
  obj: OBJ_T,
): ObjectEntries<OBJ_T> {
  return Object.entries(obj) as ObjectEntries<OBJ_T>;
}
