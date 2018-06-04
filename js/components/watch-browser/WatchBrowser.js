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

var _dec, _dec2, _dec3, _dec4, _class, _class2, _temp;
//import PropTypes from 'prop-types'

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _MenuBrowserStyle = require('../styles/MenuBrowserStyle');

var _MenuBrowserStyle2 = _interopRequireDefault(_MenuBrowserStyle);

var _Type = require('../../constants/Type');

var _ComponentActions = require('../../flux/actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _WatchActions = require('../../flux/actions/WatchActions');

var _WatchActions2 = _interopRequireDefault(_WatchActions);

var _Atoms = require('../zhn-atoms/Atoms');

var _Atoms2 = _interopRequireDefault(_Atoms);

var _EditBar = require('./EditBar');

var _EditBar2 = _interopRequireDefault(_EditBar);

var _WatchItem = require('./WatchItem');

var _WatchItem2 = _interopRequireDefault(_WatchItem);

var _Decorators = require('./decorators/Decorators');

var _Decorators2 = _interopRequireDefault(_Decorators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var C_FILL_OPEN = '#80c040';
var CL_WATCH_ITEM = 'row__type2-topic not-selected';

var DRAG = {
  GROUP: 'GROUP',
  LIST: 'LIST',
  ITEM: 'ITEM'
};

var S = {
  BROWSER: {
    paddingRight: '0px'
  },
  BT_CIRCLE: {
    marginLeft: '20px',
    position: 'relative',
    top: '-2px'
  },
  SP: {
    overflowY: 'auto',
    height: '92%',
    paddingRight: '10px'
  },
  SP_SHORT: {
    height: 'calc(100% - 70px)'
  },
  GROUP_DIV: {
    lineHeight: 2.5
  },
  LIST_DIV: {
    marginLeft: '8px',
    paddingLeft: '12px',
    borderLeft: '1px solid yellow',
    lineHeight: 2.5
  },
  ITEM_NOT_SELECTED: {
    borderBottom: '1px solid rgba(128, 192, 64, 0.6)',
    marginRight: '10px'
  }
};

var saveWatch = _WatchActions2.default.saveWatch,
    removeWatchItem = _WatchActions2.default.removeWatchItem;
var WatchBrowser = (_dec = _Decorators2.default.withDnDStyle, _dec2 = _Decorators2.default.withDnDGroup(DRAG, _WatchActions2.default), _dec3 = _Decorators2.default.withDnDList(DRAG, _WatchActions2.default), _dec4 = _Decorators2.default.withDnDItem(DRAG, _WatchActions2.default), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(WatchBrowser, _Component);

  function WatchBrowser(props) {
    (0, _classCallCheck3.default)(this, WatchBrowser);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WatchBrowser.__proto__ || Object.getPrototypeOf(WatchBrowser)).call(this));

    _this._onStore = function (actionType, data) {
      var _this$props = _this.props,
          browserType = _this$props.browserType,
          showAction = _this$props.showAction,
          updateAction = _this$props.updateAction;

      if (actionType === showAction && data === browserType) {
        _this._handlerShow();
      } else if (actionType === updateAction) {
        _this.setState({ watchList: data });
      }
    };

    _this._handlerHide = function () {
      _this.setState({ isShow: false });
    };

    _this._handlerShow = function () {
      _this.setState({ isShow: true });
    };

    _this._handlerToggleEditMode = function () {
      _this.setState({ isModeEdit: !_this.state.isModeEdit });
    };

    _this._renderWatchList = function (watchList, TS) {
      var isModeEdit = _this.state.isModeEdit;

      return watchList.groups.map(function (group, index) {
        var caption = group.caption,
            lists = group.lists;

        return _react2.default.createElement(
          _Atoms2.default.OpenClose2,
          {
            key: index,
            style: (0, _extends3.default)({}, S.GROUP_DIV, TS.OPEN_CLOSE),
            caption: caption,
            isClose: true,
            isDraggable: isModeEdit,
            option: { caption: caption },
            onDragStart: _this._handlerDragStartGroup,
            onDragEnter: _this._handlerDragEnterGroup,
            onDragOver: _this._handlerDragOverGroup,
            onDragLeave: _this._handlerDragLeaveGroup,
            onDrop: _this._handlerDropGroup
          },
          lists && _this._renderLists(lists, caption, TS)
        );
      });
    };

    _this._renderLists = function (lists, groupCaption, TS) {
      var isModeEdit = _this.state.isModeEdit;

      return lists.map(function (list, index) {
        var caption = list.caption,
            items = list.items;

        return _react2.default.createElement(
          _Atoms2.default.OpenClose2,
          {
            key: index,
            fillOpen: C_FILL_OPEN,
            style: (0, _extends3.default)({}, S.LIST_DIV, TS.OPEN_CLOSE),
            styleNotSelected: S.ITEM_NOT_SELECTED,
            caption: caption,
            isClose: true,
            isDraggable: isModeEdit,
            option: { groupCaption: groupCaption, caption: caption },
            onDragStart: _this._handlerDragStartList,
            onDragEnter: _this._handlerDragEnterList,
            onDragOver: _this._handlerDragOverList,
            onDragLeave: _this._handlerDragLeaveList,
            onDrop: _this._handlerDropList
          },
          items && _this._renderItems(items, groupCaption, caption)
        );
      });
    };

    _this._renderItems = function (items, groupCaption, listCaption) {
      var isModeEdit = _this.state.isModeEdit;

      return items.map(function (item, index) {
        var id = item.id,
            caption = item.caption;

        return _react2.default.createElement(_WatchItem2.default, {
          key: id,
          className: CL_WATCH_ITEM,
          isModeEdit: isModeEdit,
          item: item,
          option: { groupCaption: groupCaption, listCaption: listCaption, caption: caption },
          onClick: _this._handlerClickItem,
          onClose: _this._handlerRemoveItem,
          onDragStart: _this._handlerDragStartItem,
          onDragOver: _this._handlerDragOverItem,
          onDragEnter: _this._handlerDragEnterItem,
          onDragLeave: _this._handlerDragLeaveItem,
          onDrop: _this._handlerDropItem
        });
      });
    };

    _this._handlerDragStartGroup = _this._handlerDragStartGroup.bind(_this);
    _this._handlerDropGroup = _this._handlerDropGroup.bind(_this);
    _this._handlerDragEnterGroup = _this._handlerDragEnterGroup.bind(_this);
    _this._handlerDragLeaveGroup = _this._handlerDragLeaveGroup.bind(_this);

    _this._handlerDragStartList = _this._handlerDragStartList.bind(_this);
    _this._handlerDropList = _this._handlerDropList.bind(_this);
    _this._handlerDragEnterList = _this._handlerDragEnterList.bind(_this);
    _this._handlerDragLeaveList = _this._handlerDragLeaveList.bind(_this);

    _this._handlerDragStartItem = _this._handlerDragStartItem.bind(_this);
    _this._handlerDropItem = _this._handlerDropItem.bind(_this);
    _this._handlerDragEnterItem = _this._handlerDragEnterItem.bind(_this);
    _this._handlerDragLeaveItem = _this._handlerDragLeaveItem.bind(_this);

    _this._handlerClickItem = _this._handlerClickItem.bind(_this);

    var isInitShow = props.isInitShow,
        store = props.store;

    _this.state = {
      isShow: !!isInitShow,
      isModeEdit: false,
      watchList: store.getWatchList()
    };
    return _this;
  }
  /*
  static propTypes = {
    caption: PropTypes.string,
    isInitShow: PropTypes.bool,
    store: PropTypes.object,
    browserType: PropTypes.string,
    showAction: PropTypes.string,
    updateAction: PropTypes.string,
    onClickItem: PropTypes.func
  }
  */


  (0, _createClass3.default)(WatchBrowser, [{
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
    key: '_handlerSaveWatch',
    value: function _handlerSaveWatch() {
      saveWatch();
    }
  }, {
    key: '_handlerEditGroup',
    value: function _handlerEditGroup() {
      _ComponentActions2.default.showModalDialog(_Type.ModalDialog.EDIT_WATCH_GROUP);
    }
  }, {
    key: '_handlerEditList',
    value: function _handlerEditList() {
      _ComponentActions2.default.showModalDialog(_Type.ModalDialog.EDIT_WATCH_LIST);
    }
  }, {
    key: '_handlerClickItem',
    value: function _handlerClickItem(item) {
      this.props.onClickItem(item);
      //ComponentActions.showModalDialog(ModalDialog.LOAD_ITEM, item)
    }
  }, {
    key: '_handlerRemoveItem',
    value: function _handlerRemoveItem(option, event) {
      event.stopPropagation();
      removeWatchItem(option);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          caption = _props.caption,
          _state = this.state,
          isShow = _state.isShow,
          isModeEdit = _state.isModeEdit,
          watchList = _state.watchList,
          _captionEV = isModeEdit ? 'V' : 'E',
          _spStyle = isModeEdit ? (0, _extends3.default)({}, S.SP, S.SP_SHORT) : S.SP,
          TS = theme.createStyle(_MenuBrowserStyle2.default);

      return _react2.default.createElement(
        _Atoms2.default.Browser,
        {
          isShow: isShow,
          style: (0, _extends3.default)({}, S.BROWSER, TS.BROWSER)
        },
        _react2.default.createElement(
          _Atoms2.default.BrowserCaption,
          {
            rootStyle: TS.BROWSER_CAPTION,
            caption: caption,
            onClose: this._handlerHide
          },
          _react2.default.createElement(_Atoms2.default.CircleButton, {
            caption: 'S',
            title: 'Save to LocalStorage',
            style: S.BT_CIRCLE,
            onClick: this._handlerSaveWatch
          }),
          _react2.default.createElement(_Atoms2.default.CircleButton, {
            caption: _captionEV,
            title: 'Toggle Edit Mode: E/V',
            style: S.BT_CIRCLE,
            onClick: this._handlerToggleEditMode
          })
        ),
        _react2.default.createElement(_EditBar2.default, {
          isShow: isModeEdit,
          onClickGroup: this._handlerEditGroup,
          onClickList: this._handlerEditList
        }),
        _react2.default.createElement(
          _Atoms2.default.ScrollPane,
          {
            className: TS.CL_SCROLL_PANE,
            style: _spStyle
          },
          watchList && this._renderWatchList(watchList, TS)
        )
      );
    }
  }]);
  return WatchBrowser;
}(_react.Component), _class2.defaultProps = {
  onClickItem: function onClickItem() {}
}, _temp)) || _class) || _class) || _class) || _class);
exports.default = (0, _withTheme2.default)(WatchBrowser);
//# sourceMappingURL=WatchBrowser.js.map