import { StringUtils } from './string';
import { ArrayUtils } from './array';
import { ObjectUtils } from './object';
import { DateUtils } from './date';
import { NumberUtils } from './number';
import { ValidationUtils } from './validation';
import { IdUtils } from './id';
import { CookieUtils } from './cookie';

export * from './string';
export * from './array';
export * from './object';
export * from './date';
export * from './number';
export * from './validation';
export * from './id';
export * from './cookie';

export { StringUtils, ArrayUtils, ObjectUtils, DateUtils, NumberUtils, ValidationUtils, IdUtils, CookieUtils };

export const Utils = {
  string: StringUtils,
  array: ArrayUtils,
  object: ObjectUtils,
  date: DateUtils,
  number: NumberUtils,
  validation: ValidationUtils,
  id: IdUtils,
  cookie: CookieUtils,
};

export default Utils;