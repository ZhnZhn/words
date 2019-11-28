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

var ListCreatePane = function (_Component) {
  (0, _inherits3.default)(ListCreatePane, _Component);

  /*
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func,
      getWatchGroups: PropTypes.func
    }),
    actionCompleted: PropTypes.string,
    actionFailed: PropTypes.string,
    forActionType: PropTypes.string,
    msgOnNotSelect: PropTypes.func,
    msgOnIsEmptyName: PropTypes.func,
      inputStyle: PropTypes.object,
    btStyle: PropTypes.object,
      onCreate: PropTypes.func,
    onClose: PropTypes.func
  }
  */

  function ListCreatePane(props) {
    (0, _classCallCheck3.default)(this, ListCreatePane);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ListCreatePane.__proto__ || Object.getPrototypeOf(ListCreatePane)).call(this));

    _this._onStore = function (actionType, data) {
      var _this$props = _this.props,
          actionCompleted = _this$props.actionCompleted,
          actionFailed = _this$props.actionFailed,
          forActionType = _this$props.forActionType,
          store = _this$props.store;

      if (actionType === actionCompleted) {
        var isUpdateGroup = true;
        if (data.forActionType === forActionType) {
          _this._handleClear();
          isUpdateGroup = false;
        }
        _this.setState({
          groupOptions: store.getWatchGroups(),
          isUpdateGroup: isUpdateGroup
        });
      } else if (actionType === actionFailed && data.forActionType === forActionType) {
        _this.setState({
          validationMessages: data.messages,
          isUpdateGroup: false
        });
      }
    };

    _this._handleSelectGroup = function (item) {
      if (item && item.caption) {
        _this.captionGroup = item.caption;
      } else {
        _this.captionGroup = null;
      }
    };

    _this._handleClear = function () {
      _this.inputText.setValue('');
      if (_this.state.validationMessages.length > 0) {
        _this.setState({ validationMessages: [], isUpdateGroup: false });
      }
    };

    _this._handleCreate = function () {
      var _this$props2 = _this.props,
          onCreate = _this$props2.onCreate,
          msgOnNotSelect = _this$props2.msgOnNotSelect,
          msgOnIsEmptyName = _this$props2.msgOnIsEmptyName,
          captionList = _this.inputText.getValue();

      if (_this.captionGroup && captionList) {
        onCreate({
          captionGroup: _this.captionGroup,
          captionList: captionList
        });
      } else {
        var msg = [];
        if (!_this.captionGroup) {
          msg.push(msgOnNotSelect('In Group'));
        }
        if (!captionList) {
          msg.push(msgOnIsEmptyName('List'));
        }
        _this.setState({ validationMessages: msg, isUpdateGroup: false });
      }
    };

    _this._crPrimaryBt = function (btStyle) {
      return _react2.default.createElement(_Atoms2.default.Button.Primary, {
        style: btStyle,
        caption: 'Create',
        title: 'Create New List',
        onClick: _this._handleCreate
      });
    };

    _this._refInputText = function (c) {
      return _this.inputText = c;
    };

    _this.captionGroup = null;
    _this.state = {
      groupOptions: props.store.getWatchGroups(),
      isUpdateGroup: false,
      validationMessages: []
    };
    return _this;
  }

  (0, _createClass3.default)(ListCreatePane, [{
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
          _state = this.state,
          groupOptions = _state.groupOptions,
          validationMessages = _state.validationMessages;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Atoms2.default.RowInputSelect, {
          inputStyle: inputStyle,
          caption: 'In Group:',
          options: groupOptions,
          onSelect: this._handleSelectGroup
        }),
        _react2.default.createElement(_Atoms2.default.RowInputText, {
          ref: this._refInputText,
          inputStyle: inputStyle,
          caption: 'List:'
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
  return ListCreatePane;
}(_react.Component);
//import PropTypes from "prop-types";

exports.default = ListCreatePane;
//# sourceMappingURL=ListCreatePane.js.map