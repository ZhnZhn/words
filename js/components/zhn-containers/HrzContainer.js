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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from 'prop-types'

var CL_DIV = "hrz-container";

var HrzContainer = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(HrzContainer, _Component);

  function HrzContainer(props) {
    (0, _classCallCheck3.default)(this, HrzContainer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HrzContainer.__proto__ || Object.getPrototypeOf(HrzContainer)).call(this));

    _this._onStore = function (actionType, option) {
      if (actionType === _this.props.addAction && option.Comp) {
        _this.setState(function (prevState) {
          prevState.containers.unshift(option.Comp);
          return prevState;
        });
      }
    };

    _this.state = {
      containers: []
    };
    return _this;
  }
  /*
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func
    }),
    addAction: PropTypes.string
  }
  */


  (0, _createClass3.default)(HrzContainer, [{
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
    key: '_renderContainers',
    value: function _renderContainers(containers) {
      return containers.map(function (container) {
        return container;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var className = this.props.className,
          containers = this.state.containers;

      return _react2.default.createElement(
        'div',
        { className: CL_DIV + ' ' + className },
        this._renderContainers(containers)
      );
    }
  }]);
  return HrzContainer;
}(_react.Component), _class.defaultProps = {
  className: ''
}, _temp);
exports.default = HrzContainer;
//# sourceMappingURL=HrzContainer.js.map