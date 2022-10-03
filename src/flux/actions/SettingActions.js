import Reflux from 'reflux-core';

export const SAT_CHECK_AUTO_SAVE = "checkAutoSave"
export const SAT_UNCHECK_AUTO_SAVE = "uncheckAutoSave"

export const SettingActions = Reflux.createActions({
  [SAT_CHECK_AUTO_SAVE]: {},
  [SAT_UNCHECK_AUTO_SAVE]: {}
});
