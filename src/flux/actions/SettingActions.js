
import Reflux from 'reflux-core'

const T = {
  CHECK_AUTO_SAVE: "checkAutoSave",
  UNCHECK_AUTO_SAVE: "uncheckAutoSave"
}

const Actions = Reflux.createActions({
  [T.CHECK_AUTO_SAVE]: {},
  [T.UNCHECK_AUTO_SAVE]: {}
});

export default Actions
