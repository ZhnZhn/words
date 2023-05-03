export const HAS_TOUCH_EVENTS = document
  && 'ontouchstart' in document.documentElement;

const _HAS_ACCESS_KEY = !HAS_TOUCH_EVENTS; 
export const hasAccessKey = (
  accessKey
) => _HAS_ACCESS_KEY && accessKey
