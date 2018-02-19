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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _class, _temp;
//import PropTypes from "prop-types";

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BrowserCaption = require('../zhn-atoms/BrowserCaption');

var _BrowserCaption2 = _interopRequireDefault(_BrowserCaption);

var _RaisedButton = require('../zhn-atoms/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Dialog = require('./Dialog.Style');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  SHOWING: 'show-popup',
  HIDING: 'hide-popup'
};

var S = (0, _extends3.default)({}, _Dialog2.default, {
  ROOT_DIV_MODAL: {
    position: 'absolute',
    top: '20%',
    left: '40%',
    display: 'block',
    zIndex: 10
  },
  HIDE_POPUP: {
    opacity: 0,
    transform: 'scaleY(0)'
  }
});

var ModalDialog = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ModalDialog, _Component);

  function ModalDialog(props) {
    (0, _classCallCheck3.default)(this, ModalDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ModalDialog.__proto__ || Object.getPrototypeOf(ModalDialog)).call(this));

    _this._refBtClose = function (n) {
      return _this._btClose = n;
    };

    _this._renderCommandButton = function () {
      var _this$props = _this.props,
          STYLE = _this$props.STYLE,
          commandButtons = _this$props.commandButtons,
          withoutClose = _this$props.withoutClose,
          onClose = _this$props.onClose;

      return _react2.default.createElement(
        'div',
        { style: S.COMMAND_DIV },
        commandButtons,
        !withoutClose && _react2.default.createElement(_RaisedButton2.default, {
          ref: _this._refBtClose,
          rootStyle: STYLE.RAISED_ROOT,
          clDiv: STYLE.CL_RAISED_DIV,
          caption: 'Close',
          isPrimary: true,
          onClick: onClose
        })
      );
    };

    _this.wasClosing = false;
    return _this;
  }
  /*
   static propTypes = {
     isShow: PropTypes.bool,
     isWithButton: PropTypes.bool,
     isNotUpdate: PropTypes.bool,
     withoutClose: PropTypes.bool,
     isFocusClose: PropTypes.bool,
     commandButtons: PropTypes.arrayOf(PropTypes.element),
     timeout: PropTypes.number,
     caption: PropTypes.string,
     style: PropTypes.object,
     onClose: PropTypes.func
   }
   */


  (0, _createClass3.default)(ModalDialog, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextProps !== this.props) {
        if (nextProps.isNotUpdate) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'focusBtClose',
    value: function focusBtClose() {
      if (this.props.isFocusClose && this._btClose) {
        this._btClose.focus();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.focusBtClose();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _props = this.props,
          timeout = _props.timeout,
          isShow = _props.isShow;

      if (this.wasClosing) {
        setTimeout(function () {
          _this2.setState({});
        }, timeout);
      }
      if (prevProps.isShow === false && isShow) {
        this.focusBtClose();
      }
    }
  }, {
    key: '_handleClickDialog',
    value: function _handleClickDialog(event) {
      event.stopPropagation();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          isShow = _props2.isShow,
          isWithButton = _props2.isWithButton,
          style = _props2.style,
          caption = _props2.caption,
          captionStyle = _props2.captionStyle,
          children = _props2.children,
          onClose = _props2.onClose;


      var _className = void 0,
          _style = void 0;

      if (this.wasClosing) {
        _style = S.HIDE;
        this.wasClosing = false;
      } else {
        _className = isShow ? CL.SHOWING : CL.HIDING;
        _style = isShow ? S.SHOW : S.HIDE_POPUP;
        if (!isShow) {
          this.wasClosing = true;
        }
      }

      return _react2.default.createElement(
        'div',
        {
          className: _className,
          style: (0, _extends3.default)({}, S.ROOT_DIV, S.ROOT_DIV_MODAL, style, _style),
          onClick: this._handleClickDialog
        },
        _react2.default.createElement(_BrowserCaption2.default, {
          rootStyle: captionStyle,
          caption: caption,
          onClose: onClose
        }),
        _react2.default.createElement(
          'div',
          null,
          children
        ),
        isWithButton && this._renderCommandButton()
      );
    }
  }]);
  return ModalDialog;
}(_react.Component), _class.defaultProps = {
  isWithButton: true,
  isNotUpdate: false,
  isFocusClose: true,
  timeout: 450,
  STYLE: {}
}, _temp);
exports.default = ModalDialog;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\zhn-moleculs\ModalDialog.js.map