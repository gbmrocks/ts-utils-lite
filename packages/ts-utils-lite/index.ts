import { StringUtils } from "../ts-string-lite";
import { ArrayUtils } from "../ts-array-lite";
import { ObjectUtils } from "../ts-object-lite";
import { DateUtils } from "../ts-date-lite";
import { NumberUtils } from "../ts-number-lite";
import { ValidationUtils } from "../ts-validation-lite";
import { IdUtils } from "../ts-id-lite";
import { CookieUtils } from "../ts-cookie-lite";

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
