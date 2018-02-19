'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from 'prop-types'

var CL_ROOT = "svg-close";
var S = {
  //COLOR : '#F44336',
  COLOR: '#D64336',
  SVG: {
    padding: '3px'
  }
};

var SvgClose = function SvgClose(_ref) {
  var style = _ref.style,
      tabIndex = _ref.tabIndex,
      onClose = _ref.onClose;
  return _react2.default.createElement(
    'button',
    {
      tabIndex: tabIndex,
      className: CL_ROOT,
      style: style,
      onClick: onClose
    },
    _react2.default.createElement(
      'svg',
      {
        viewBox: '0 0 12 12', width: '100%', height: '100%',
        style: S.SVG, preserveAspectRatio: 'none', xmlns: 'http://www.w3.org/2000/svg',
        strokeWidth: '2',
        stroke: S.COLOR,
        strokeLinecap: 'round'
      },
      _react2.default.createElement('path', { d: 'M 0,0 L 12,12' }),
      _react2.default.createElement('path', { d: 'M 12,0 L 0,12' })
    )
  );
};

/*
SvgClose.propTypes = {
  style: PropTypes.object,
  onClose: PropTypes.func
}
*/
SvgClose.defaultProps = {
  onClose: function onClose() {}
};

exports.default = SvgClose;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\zhn-atoms\SvgClose.js.map