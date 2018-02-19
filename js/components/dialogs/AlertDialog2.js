'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;
//import PropTypes from "prop-types";

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Dialog = require('./Dialog.Style');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _ModalDialog = require('../zhn-moleculs/ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  ELL: 'ellipsis'
};

var S = {
  CAPTION: {
    //color: '#f44336',
    color: '#f44336',
    fontWeight: 'bold'
  },
  ROW: {
    //display: 'block',
    display: 'flex',
    alignItems: 'center',
    marginRight: '5px',
    marginTop: '5px',
    marginLeft: '5px',
    marginBottom: '5px'
  },
  TITLE: {
    display: 'inline-block',
    width: '360px',
    paddingLeft: '10px',
    color: '#F44336',
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: 2
  },
  ITEM_ID: {
    width: '120px',
    color: '#a487d4',
    fontWeight: 'bold',
    verticalAlign: 'bottom'
  },
  DESCR: {
    color: 'gray',
    width: '360px',
    paddingLeft: '10px',
    paddingRight: '8px',
    fontWeight: 'bold',
    lineHeight: 1.4,
    whiteSpace: 'pre-line',
    wordWrap: 'break-word'
  }
};

var AlertDialog2 = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(AlertDialog2, _Component);

  function AlertDialog2() {
    (0, _classCallCheck3.default)(this, AlertDialog2);
    return (0, _possibleConstructorReturn3.default)(this, (AlertDialog2.__proto__ || Object.getPrototypeOf(AlertDialog2)).apply(this, arguments));
  }

  (0, _createClass3.default)(AlertDialog2, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
        return false;
      }
      return true;
    }

    /*
    static propTypes = {
      isShow: PropTypes.bool,
      data: PropTypes.shape({
        caption: PropTypes.string,
        itemId: PropTypes.string,
        descr: PropTypes.string
      }),
      onClose: PropTypes.func
    }
    */

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          isShow = _props.isShow,
          data = _props.data,
          onClose = _props.onClose,
          TS = theme.createStyle(_Dialog2.default),
          _data$caption = data.caption,
          caption = _data$caption === undefined ? 'Item' : _data$caption,
          _data$itemId = data.itemId,
          itemId = _data$itemId === undefined ? '' : _data$itemId,
          descr = data.descr,
          _caption = caption + ': ';

      return _react2.default.createElement(
        _ModalDialog2.default,
        {
          STYLE: TS.BT,
          style: TS.R_DIALOG,
          caption: 'Exception',
          captionStyle: (0, _extends3.default)({}, TS.BROWSER_CAPTION, S.CAPTION),
          isShow: isShow,
          isClosePrimary: true,
          onClose: onClose
        },
        _react2.default.createElement(
          'div',
          { style: S.ROW },
          _react2.default.createElement(
            'span',
            { style: S.TITLE },
            _caption,
            _react2.default.createElement(
              'span',
              {
                className: CL.ELL,
                style: S.ITEM_ID,
                title: itemId
              },
              itemId
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { style: S.ROW },
          _react2.default.createElement(
            'p',
            { style: S.DESCR },
            descr
          )
        )
      );
    }
  }]);
  return AlertDialog2;
}(_react.Component), _class.defaultProps = {
  data: {}
}, _temp);
exports.default = (0, _withTheme2.default)(AlertDialog2);
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\dialogs\AlertDialog2.js.map