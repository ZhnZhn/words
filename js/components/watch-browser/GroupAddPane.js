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

var _Atoms = require('./Atoms');

var _Atoms2 = _interopRequireDefault(_Atoms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GroupAddPane = function (_Component) {
  (0, _inherits3.default)(GroupAddPane, _Component);

  /*
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func
    }),
    actionCompleted: PropTypes.string,
    actionFailed: PropTypes.string,
    forActionType: PropTypes.string,
    msgOnIsEmptyName: PropTypes.func,
      inputStyle: PropTypes.object,
    btStyle: PropTypes.object,
    
    onCreate: PropTypes.func,
    onClose: PropTypes.func
  }
  */

  function GroupAddPane(props) {
    (0, _classCallCheck3.default)(this, GroupAddPane);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GroupAddPane.__proto__ || Object.getPrototypeOf(GroupAddPane)).call(this));

    _this._onStore = function (actionType, data) {
      var _this$props = _this.props,
          actionCompleted = _this$props.actionCompleted,
          actionFailed = _this$props.actionFailed,
          forActionType = _this$props.forActionType;

      if (actionType === actionCompleted && data.forActionType === forActionType) {
        _this._handleClear();
      } else if (actionType === actionFailed && data.forActionType === forActionType) {
        _this.setState({ validationMessages: data.messages });
      }
    };

    _this._handleClear = function () {
      _this.inputText.setValue('');
      if (_this.state.validationMessages.length > 0) {
        _this.setState({ validationMessages: [] });
      }
    };

    _this._handleCreate = function () {
      var _this$props2 = _this.props,
          onCreate = _this$props2.onCreate,
          msgOnIsEmptyName = _this$props2.msgOnIsEmptyName,
          caption = _this.inputText.getValue();

      if (caption) {
        onCreate({ caption: caption });
      } else {
        _this.inputText.setValue('');
        _this.setState({ validationMessages: [msgOnIsEmptyName('Group')] });
      }
    };

    _this._crPrimaryBt = function (btStyle) {
      return _react2.default.createElement(_Atoms2.default.Button.Primary, {
        style: btStyle,
        caption: 'Create',
        title: 'Create New Group',
        onClick: _this._handleCreate
      });
    };

    _this._refInputText = function (c) {
      return _this.inputText = c;
    };

    _this.state = {
      validationMessages: []
    };
    return _this;
  }

  (0, _createClass3.default)(GroupAddPane, [{
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
      var _props = this.props,
          inputStyle = _props.inputStyle,
          btStyle = _props.btStyle,
          onClose = _props.onClose,
          validationMessages = this.state.validationMessages;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Atoms2.default.RowInputText, {
          ref: this._refInputText,
          caption: 'Group:',
          inputStyle: inputStyle
        }),
        _react2.default.createElement(_Atoms2.default.ValidationMessages, {
          validationMessages: validationMessages
        }),
        _react2.default.createElement(_Atoms2.default.RowButtons, {
          btStyle: btStyle,
          Primary: this._crPrimaryBt(btStyle),
          onClear: this._handleClear,
          onClose: onClose
        })
      );
    }
  }]);
  return GroupAddPane;
}(_react.Component);
//import PropTypes from "prop-types";

exports.default = GroupAddPane;
//# sourceMappingURL=GroupAddPane.js.map