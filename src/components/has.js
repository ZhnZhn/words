export const HAS_TOUCH_EVENTS = document
  && 'ontouchstart' in document.documentElement;

const _getWindowInnerWidth = () => window
  && window.innerWidth

const _DF_WIDE_WIDTH = 700;
const _isWideWidth = (
  wideWidth=_DF_WIDE_WIDTH
) => (_getWindowInnerWidth() || wideWidth+1) > wideWidth

const _HAS_WIDE_SCREEN = _isWideWidth();
export const HAS_KEYBOARD_FOCUS = !HAS_TOUCH_EVENTS
  || _HAS_WIDE_SCREEN

export const hasAccessKey = (
  accessKey
) => HAS_KEYBOARD_FOCUS && accessKey
