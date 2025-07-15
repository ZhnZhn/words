const _fIsTypeof = strType => v => typeof v === strType;

export const isFn = _fIsTypeof('function')
export const isBool = _fIsTypeof('boolean')
