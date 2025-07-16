const _fIsTypeof = strType => v => typeof v === strType;

export const isFn = _fIsTypeof('function')
export const isBool = _fIsTypeof('boolean')
export const isStr = _fIsTypeof('string')

export const isStrNotBlank = v => isStr(v) && !!v.trim()

export const isObj = v => typeof v === "object"
  && v !== null

export const isArr = Array.isArray
