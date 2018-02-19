
import DialogType1 from './DialogType1'

const R = {
  DF: DialogType1,
  DialogType1
};

const RouterDialog = {
  getElement: (type) => R[type] || R.DF
};

export default RouterDialog
