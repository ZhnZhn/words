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
//import PropTypes from 'prop-types'

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Pane = require('./Pane.Style');

var _Pane2 = _interopRequireDefault(_Pane);

var _Atoms = require('../zhn-atoms/Atoms');

var _Atoms2 = _interopRequireDefault(_Atoms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SHOW_POPUP = "show-popup",
    CHILD_MARGIN = 36,
    RESIZE_MIN_WIDTH = 375,
    RESIZE_MAX_WIDTH = 1200;

var S = {
  ROOT_DIV: {
    backgroundColor: '#4D4D4D',
    padding: '0px 0px 3px 0px',
    position: 'relative',
    borderRadius: '4px',
    width: '635px',
    height: 'calc(100vh - 71px)',
    minHeight: '500px',
    marginLeft: '16px',
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    overflowY: 'hidden',
    overflowX: 'hidden'
  },
  BR_CAPTION: {
    marginRight: '-2px'
  },
  BT_CIRCLE: {
    marginLeft: '16px',
    marginRight: '6px'
  },
  SCROLL_PANE: {
    overflowY: 'auto',
    //height: '92%',
    height: 'calc(100% - 120px)',
    paddingRight: '10px'
  },
  INLINE_BLOCK: {
    display: 'inline-block'
  },
  NONE: {
    display: 'none'
  }
};

var _fnNoop = function _fnNoop() {};

var NewsPane = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(NewsPane, _Component);

  function NewsPane(props) {
    (0, _classCallCheck3.default)(this, NewsPane);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NewsPane.__proto__ || Object.getPrototypeOf(NewsPane)).call(this));

    _this._onStore = function (actionType) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _this$props = _this.props,
          id = _this$props.id,
          addAction = _this$props.addAction,
          showAction = _this$props.showAction,
          toggleAction = _this$props.toggleAction;


      if (option.id === id) {
        switch (actionType) {
          case addAction:
            _this.setState({
              isShow: true,
              configs: option.configs
            });
            break;
          case showAction:
            if (!_this.state.isShow) {
              _this.setState({
                isShow: true
              });
            }
            break;
          case toggleAction:
            _this.setState(function (prevState) {
              return {
                isShow: !prevState.isShow
              };
            });
            break;
          default:
            return undefined;
        }
      }
    };

    _this._hHide = function () {
      _this.props.onClose();
      _this.setState({ isShow: false });
    };

    _this._getRootDiv = function () {
      return _this.rootDiv;
    };

    _this._hLoadItem = function () {
      var _this$props2 = _this.props,
          itemConf = _this$props2.itemConf,
          onLoad = _this$props2.onLoad,
          _word = _this.iWord ? _this.iWord.getValue() : undefined;

      onLoad({
        itemConf: itemConf,
        word: _word
      });
    };

    _this._refRootDiv = function (node) {
      return _this.rootDiv = node;
    };

    _this._refIWord = function (comp) {
      return _this.iWord = comp;
    };

    _this.childMargin = CHILD_MARGIN;
    _this.state = {
      isShow: true,
      configs: []
    };
    return _this;
  }
  /*
    static propTypes = {
      paneCaption: PropTypes.string,
      store: PropTypes.shape({
        listen; PropTypes.func
      }),
        id: PropTypes.string,
      addAction: PropTypes.string,
      showAction: PropTypes.string,
      toggleAction: PropTypes.string
      Input: PropTypes.element,
        itemConf: PropTypes.object,
      onLoad: PropTypes.func
      onClose: PropTypes.func
        onRemoveItems: PropTypes.func,
      onRemoveUnder: PropTypes.func,
      onCloseItem: PropTypes.func,
      onAddToWatch: PropTypes.func
    }
  */

  (0, _createClass3.default)(NewsPane, [{
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
    key: '_renderConfigs',
    value: function _renderConfigs() {
      var configs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var _props = this.props,
          Item = _props.Item,
          onCloseItem = _props.onCloseItem,
          onRemoveUnder = _props.onRemoveUnder,
          onAddToWatch = _props.onAddToWatch;

      return configs.map(function (config) {
        return _react2.default.createElement(Item, {
          key: config.id,
          config: config,
          onCloseItem: onCloseItem,
          onRemoveUnder: onRemoveUnder,
          onAddToWatch: onAddToWatch
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          paneCaption = _props2.paneCaption,
          theme = _props2.theme,
          Input = _props2.Input,
          onRemoveItems = _props2.onRemoveItems,
          _state = this.state,
          isShow = _state.isShow,
          configs = _state.configs,
          TS = theme.createStyle(_Pane2.default),
          _showStyle = isShow ? S.INLINE_BLOCK : S.NONE,
          _showCl = isShow ? SHOW_POPUP : undefined;

      return _react2.default.createElement(
        'div',
        {
          ref: this._refRootDiv,
          className: _showCl,
          style: (0, _extends3.default)({}, S.ROOT_DIV, TS.PANE_ROOT, _showStyle)
        },
        _react2.default.createElement(
          _Atoms2.default.BrowserCaption,
          {
            rootStyle: (0, _extends3.default)({}, S.BR_CAPTION, TS.PANE_CAPTION),
            caption: paneCaption,
            onClose: this._hHide
          },
          _react2.default.createElement(_Atoms2.default.CircleButton, {
            caption: 'R',
            style: S.BT_CIRCLE,
            onClick: onRemoveItems
          }),
          _react2.default.createElement(_Atoms2.default.SvgHrzResize, {
            svgStyle: TS.SVG_RESIZE,
            minWidth: RESIZE_MIN_WIDTH,
            maxWidth: RESIZE_MAX_WIDTH,
            getDomNode: this._getRootDiv
          })
        ),
        _react2.default.createElement(Input, {
          ref: this._refIWord,
          TS: TS,
          onEnter: this._hLoadItem
        }),
        _react2.default.createElement(
          _Atoms2.default.ScrollPane,
          {
            className: TS.CL_SCROLL_PANE,
            style: S.SCROLL_PANE
          },
          this._renderConfigs(configs)
        )
      );
    }
  }]);
  return NewsPane;
}(_react.Component), _class.defaultProps = {
  onLoad: _fnNoop,
  onClose: _fnNoop
}, _temp);
exports.default = (0, _withTheme2.default)(NewsPane);
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\panes\PaneType1.js.map