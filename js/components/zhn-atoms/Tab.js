'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from "prop-types";

var S = {
  LI: {
    float: 'left',
    display: 'inline-block',
    backgroundColor: '#1b2836',
    color: 'gray',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '6px',
    paddingBottom: '6px',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    cursor: 'pointer',

    fontWeight: 'bold',
    //border: '2px solid gray',
    border: '2px solid #303030',
    borderBottom: 'none'

  },
  SELECTED: {
    //borderColor : 'rgba(164, 135, 212, 1)',
    //color : 'rgba(164, 135, 212, 1)'
    color: '#80c040',
    borderColor: '#80c040'
  }
};

var Tab = function Tab(_ref) {
  var title = _ref.title,
      style = _ref.style,
      isSelected = _ref.isSelected,
      onClick = _ref.onClick;

  var _selectedStyle = isSelected ? S.SELECTED : null;
  return _react2.default.createElement(
    'li',
    {
      style: (0, _extends3.default)({}, S.LI, style, _selectedStyle),
      onClick: onClick
    },
    _react2.default.createElement(
      'span',
      null,
      title
    )
  );
};

/*
Tab.propTypes = {
  title: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
}
*/

exports.default = Tab;
//# sourceMappingURL=Tab.js.map