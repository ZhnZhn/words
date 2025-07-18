import { isFn } from './isTypeFn';

export const bindTo = (
  fn,
  ...bindArgs
) => (...args) => fn(...bindArgs, ...args)

export const safeBindTo = (
  fn,
  ...bindArgs
) => isFn(fn)
 ? (...args) => fn(...bindArgs, ...args)
 : void 0
