'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ModalPane = require('../zhn-moleculs/ModalPane');

var _ModalPane2 = _interopRequireDefault(_ModalPane);

var _ShowHide = require('../zhn-atoms/ShowHide');

var _ShowHide2 = _interopRequireDefault(_ShowHide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  BT: {
    display: 'block',
    width: '100%',
    textAlign: 'left'
  },
  PANE: {
    position: 'absolute',
    top: 12,
    zIndex: '20',
    width: '100%',
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: 'rgb(77, 77, 77)',
    borderRadius: 2,
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px'
  },
  ITEM: {
    color: '#80c040'
  }
};

var _renderOptions = function _renderOptions(options, currentItem, clItem, itemStyle, onSelect, isShow) {
  var _ref = currentItem || {},
      currentCaption = _ref.caption,
      currentValue = _ref.value;

  return options.map(function (item) {
    var _style = currentValue && item.value === currentValue || currentCaption && item.caption === currentCaption ? S.ITEM : void 0;
    return _react2.default.createElement(
      'button',
      {
        key: item.caption,
        className: clItem,
        style: (0, _extends3.default)({}, S.BT, itemStyle, _style),
        onClick: onSelect.bind(null, item)
      },
      item.caption
    );
  });
};

var OptionsPane = function OptionsPane(_ref2) {
  var isShow = _ref2.isShow,
      rootStyle = _ref2.rootStyle,
      options = _ref2.options,
      item = _ref2.item,
      clItem = _ref2.clItem,
      itemStyle = _ref2.itemStyle,
      onSelect = _ref2.onSelect,
      onClose = _ref2.onClose;
  return _react2.default.createElement(
    _ModalPane2.default,
    {
      style: rootStyle,
      isShow: isShow,
      onClose: onClose
    },
    _react2.default.createElement(
      _ShowHide2.default,
      {
        isShow: isShow,
        style: (0, _extends3.default)({}, S.PANE, rootStyle)
      },
      _renderOptions(options, item, clItem, itemStyle, onSelect, isShow)
    )
  );
};

exports.default = OptionsPane;
//# sourceMappingURL=OptionsPane.js.map