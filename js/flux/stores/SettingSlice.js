"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var SettingSlice = {
  isAutoSaveOnAdd: true,
  onCheckAutoSave: function onCheckAutoSave() {
    this.isAutoSaveOnAdd = true;
  },
  onUncheckAutoSave: function onUncheckAutoSave() {
    this.isAutoSaveOnAdd = false;
  }
};
var _default = SettingSlice;
exports["default"] = _default;
//# sourceMappingURL=SettingSlice.js.map