'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RouterModal = require('../dialogs/RouterModal');

var _RouterModal2 = _interopRequireDefault(_RouterModal);

var _ModalContainer = require('./ModalContainer');

var _ModalContainer2 = _interopRequireDefault(_ModalContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from "prop-types";

var WrapperContainer = function (_Component) {
  (0, _inherits3.default)(WrapperContainer, _Component);

  function WrapperContainer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, WrapperContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = WrapperContainer.__proto__ || Object.getPrototypeOf(WrapperContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isShow: false,
      inits: {},
      shows: {},
      data: {},
      dialogs: [],
      currentDialog: null
    }, _this._onStore = function (actionType, option) {
      var SHOW_ACTION = _this.props.SHOW_ACTION;

      if (actionType === SHOW_ACTION) {
        var type = option.modalDialogType,
            _this$state = _this.state,
            inits = _this$state.inits,
            shows = _this$state.shows,
            data = _this$state.data,
            dialogs = _this$state.dialogs;


        data[type] = option;
        shows[type] = true;
        if (inits[type]) {
          _this.setState({
            isShow: true, currentDialog: type,
            shows: shows, data: data
          });
        } else {
          _RouterModal2.default.getDialog(type).then(function (comp) {
            if (comp) {
              dialogs.push({ type: type, comp: comp });
              inits[type] = true;
              _this.setState({
                isShow: true, currentDialog: type,
                shows: shows, data: data, dialogs: dialogs
              });
            }
          });
        }
      }
    }, _this._handleClose = function (type) {
      _this.state.shows[type] = false;
      _this.setState({
        isShow: false,
        currentDialog: null,
        shows: _this.state.shows
      });
    }, _this._renderDialogs = function () {
      var store = _this.props.store,
          _this$state2 = _this.state,
          shows = _this$state2.shows,
          data = _this$state2.data,
          dialogs = _this$state2.dialogs;


      return dialogs.map(function (dialog, index) {
        var type = dialog.type,
            comp = dialog.comp;

        return _react2.default.createElement(comp, {
          key: type,
          isShow: shows[type],
          data: data[type],
          store: store,
          onClose: _this._handleClose.bind(null, type)
        });
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  /*
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func
    }),
    SHOW_ACTION: PropTypes.string
  }
  */

  (0, _createClass3.default)(WrapperContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.unsubscribe = this.props.store.listen(this._onStore);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          isShow = _state.isShow,
          currentDialog = _state.currentDialog;


      return _react2.default.createElement(
        _ModalContainer2.default,
        {
          isShow: isShow,
          onClose: this._handleClose.bind(null, currentDialog)
        },
        this._renderDialogs()
      );
    }
  }]);
  return WrapperContainer;
}(_react.Component);

exports.default = WrapperContainer;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\zhn-containers\WrapperContainer.js.map