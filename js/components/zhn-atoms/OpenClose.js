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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from 'prop-types'

var CL_CAPTION = 'open-close not-selected';

var STYLE = {
  ROOT: {
    //backgroundColor: '#4D4D4D',
    backgroundColor: 'inherit',
    lineHeight: 2.5
  },
  SVG: {
    width: '16px',
    height: '16px',
    display: 'inline-block'
  },
  ROOT_CAPTION: {
    paddingLeft: '12px'
  },
  CAPTION: {
    paddingLeft: '4px',
    verticalAlign: 'top',
    color: '#9e9e9e',
    //color: '#8a8a8a',
    //color: 'rgba(164, 135, 212, 1)',
    fontFamily: 'Roboto, Arial Unicode MS, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer'
  },
  INLINE: {
    display: 'inline-block'
  },
  BLOCK: {
    display: 'block'
  },
  NONE: {
    display: 'none'
  }
};

var FILL_OPEN = '#9e9e9e',
    FILL_CLOSE = 'transparent',
    PATH_OPEN = "M 2,14 L 14,14 14,2 2,14",
    PATH_CLOSE = "M 2,2 L 14,8 2,14 2,2";

var OpenClose = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(OpenClose, _Component);

  function OpenClose(props) {
    (0, _classCallCheck3.default)(this, OpenClose);

    var _this = (0, _possibleConstructorReturn3.default)(this, (OpenClose.__proto__ || Object.getPrototypeOf(OpenClose)).call(this, props));

    _this._handleToggle = function () {
      _this.setState({ isOpen: !_this.state.isOpen });
    };

    _this._handleKeyDown = function (event) {
      if (event.keyCode === 13 || event.keyCode === 27) {
        _this._handleToggle();
      }
    };

    _this.state = {
      isOpen: !props.isClose
    };
    return _this;
  }
  /*
  static propTypes = {
    isClose: PropTypes.bool,
      style: PropTypes.object,
    styleNotSelected: PropTypes.object,
    captionStyle: PropTypes.object,
    childrenStyle: PropTypes.object,
      caption: PropTypes.string,
    fillOpen: PropTypes.string,
    fillClose: PropTypes.string,
      isDraggable: PropTypes.bool,
    option: PropTypes.object,
    onDragStart: PropTypes.func,
    onDragEnter: PropTypes.func,
    onDragOver: PropTypes.func,
    onDragLeave: PropTypes.func,
    onDrop: PropTypes.func,
      children: PropTypes.oneOfType([
       PropTypes.arrayOf(PropTypes.node),
       PropTypes.node
    ])
  }
  */

  (0, _createClass3.default)(OpenClose, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          itemStyle = _props.itemStyle,
          captionStyle = _props.captionStyle,
          childrenStyle = _props.childrenStyle,
          caption = _props.caption,
          fillOpen = _props.fillOpen,
          fillClose = _props.fillClose,
          afterCaptionComp = _props.afterCaptionComp,
          isDraggable = _props.isDraggable,
          option = _props.option,
          onDragStart = _props.onDragStart,
          onDragEnter = _props.onDragEnter,
          onDragOver = _props.onDragOver,
          onDragLeave = _props.onDragLeave,
          onDrop = _props.onDrop,
          children = _props.children,
          _dndOption = isDraggable ? {
        draggable: true,
        onDragStart: onDragStart.bind(null, option),
        onDrop: onDrop.bind(null, option),
        onDragEnter: onDragEnter,
        onDragOver: onDragOver,
        onDragLeave: onDragLeave
      } : void 0;

      var _pathV = void 0,
          _fillV = void 0,
          _styleCollapse = void 0,
          _classShow = void 0,
          _itemStyle = void 0;
      if (this.state.isOpen) {
        _pathV = PATH_OPEN;
        _fillV = fillOpen;
        _styleCollapse = STYLE.BLOCK;
        _classShow = 'show-popup';
        _itemStyle = null;
      } else {
        _pathV = PATH_CLOSE;
        _fillV = fillClose;
        _styleCollapse = STYLE.NONE;
        _classShow = null;
        _itemStyle = itemStyle;
      }

      return _react2.default.createElement(
        'div',
        { style: (0, _extends3.default)({}, STYLE.ROOT, style) },
        _react2.default.createElement(
          'div',
          (0, _extends3.default)({
            role: 'button',
            className: CL_CAPTION,
            tabIndex: '0',
            style: (0, _extends3.default)({}, STYLE.ROOT_CAPTION, _itemStyle),
            onClick: this._handleToggle,
            onKeyDown: this._handleKeyDown
          }, _dndOption),
          _react2.default.createElement(
            'div',
            { style: STYLE.SVG },
            _react2.default.createElement(
              'svg',
              {
                viewBox: '0 0 16 16', width: '100%', height: '100%',
                preserveAspectRatio: 'none', xmlns: 'http://www.w3.org/2000/svg',
                style: STYLE.INLINE
              },
              _react2.default.createElement('path', {
                d: _pathV,
                fill: _fillV,
                strokeWidth: '1', stroke: fillOpen
              })
            )
          ),
          _react2.default.createElement(
            'span',
            { style: (0, _extends3.default)({}, STYLE.CAPTION, captionStyle) },
            caption
          ),
          afterCaptionComp
        ),
        _react2.default.createElement(
          'div',
          {
            className: _classShow,
            style: (0, _extends3.default)({}, childrenStyle, _styleCollapse)
          },
          children
        )
      );
    }
  }]);
  return OpenClose;
}(_react.Component), _class.defaultProps = {
  isClose: true,
  fillOpen: FILL_OPEN,
  fillClose: FILL_CLOSE
}, _temp);
exports.default = OpenClose;
//# sourceMappingURL=OpenClose.js.map