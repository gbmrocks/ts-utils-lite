import { StringUtils } from './string';
import { ArrayUtils } from './array';
import { ObjectUtils } from './object';
import { DateUtils } from './date';
import { NumberUtils } from './number';

export * from './string';
export * from './array';
export * from './object';
export * from './date';
export * from './number';

export { StringUtils, ArrayUtils, ObjectUtils, DateUtils, NumberUtils };

export const Utils = {
  string: StringUtils,
  array: ArrayUtils,
  object: ObjectUtils,
  date: DateUtils,
  number: NumberUtils,
};

export default Utils;