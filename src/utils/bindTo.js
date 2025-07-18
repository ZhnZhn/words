import { isFn } from './isTypeFn';

export const bindTo = (
  fn,
  ...args
) => fn.bind(null, ...args)

export const safeBindTo = (fn, ...args) => isFn(fn)
  ? bindTo(fn, ...args)
  : void 0
