"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var CHANNEL = 'LOADING_PROGRESS';
var WithLoading = {
  listenLoading: function listenLoading(fnHandler) {
    var _this = this;

    this.emitter.addListener(CHANNEL, fnHandler);
    return function () {
      _this.emitter.removeListener(fnHandler);
    };
  },
  triggerLoading: function triggerLoading(actionType, value) {
    this.emitter.emit(CHANNEL, actionType, value);
  }
};
var _default = WithLoading;
exports["default"] = _default;
//# sourceMappingURL=WithLoading.js.map