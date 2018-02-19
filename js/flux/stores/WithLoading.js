'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = WithLoading;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\flux\stores\WithLoading.js.map