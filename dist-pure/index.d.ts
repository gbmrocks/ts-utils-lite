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
export declare const Utils: {
    string: typeof StringUtils;
    array: typeof ArrayUtils;
    object: typeof ObjectUtils;
    date: typeof DateUtils;
    number: typeof NumberUtils;
};
export default Utils;
