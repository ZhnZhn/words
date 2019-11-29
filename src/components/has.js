
const _isTouchable = () => document
  && 'ontouchstart' in document.documentElement;

const has = {
  HAS_TOUCH: _isTouchable(),
};

export default has
