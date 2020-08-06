"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _MenuBrowserStyle = _interopRequireDefault(require("../styles/MenuBrowserStyle"));

var _Type = require("../../constants/Type");

var _ComponentActions = _interopRequireDefault(require("../../flux/actions/ComponentActions"));

var _WatchActions = _interopRequireDefault(require("../../flux/actions/WatchActions"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _EditBar = _interopRequireDefault(require("./EditBar"));

var _WatchItem = _interopRequireDefault(require("./WatchItem"));

var _Decorators = _interopRequireDefault(require("./decorators/Decorators"));

var _dec, _dec2, _dec3, _dec4, _class, _class2, _temp;

var C_FILL_OPEN = '#80c040';
var CL_WATCH_ITEM = 'row__type2-topic not-selected';
var DRAG = {
  GROUP: 'GROUP',
  LIST: 'LIST',
  ITEM: 'ITEM'
};
var COLOR_CAPTION = '#9e9e9e';
var S = {
  BROWSER: {
    paddingRight: 0
  },
  BT_CIRCLE: {
    position: 'relative',
    top: -2,
    marginLeft: 20
  },
  SP: {
    height: '92%',
    paddingRight: 10,
    overflowY: 'auto'
  },
  SP_SHORT: {
    height: 'calc(100% - 70px)'
  },
  GROUP_DIV: {
    lineHeight: 2.5
  },
  CAPTION: {
    color: COLOR_CAPTION
  },
  LIST_DIV: {
    marginLeft: 8,
    paddingLeft: 12,
    borderLeft: "3px solid " + COLOR_CAPTION,
    lineHeight: 2.5
  },
  ITEM_NOT_SELECTED: {
    marginRight: 10,
    borderBottom: '1px solid rgba(128, 192, 64, 0.6)'
  }
};
var T = {
  S: "Click to save to LocalStorage",
  E_V: "Click to toggle edit mode E/V"
};
var saveWatch = _WatchActions["default"].saveWatch,
    removeWatchItem = _WatchActions["default"].removeWatchItem;
var WatchBrowser = (_dec = _Decorators["default"].withDnDStyle, _dec2 = _Decorators["default"].withDnDGroup(DRAG, _WatchActions["default"]), _dec3 = _Decorators["default"].withDnDList(DRAG, _WatchActions["default"]), _dec4 = _Decorators["default"].withDnDItem(DRAG, _WatchActions["default"]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(WatchBrowser, _Component);

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
  function WatchBrowser(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._onStore = function (actionType, data) {
      var _this$props = _this.props,
          browserType = _this$props.browserType,
          showAction = _this$props.showAction,
          updateAction = _this$props.updateAction;

      if (actionType === showAction && data === browserType) {
        _this._handlerShow();
      } else if (actionType === updateAction) {
        _this.setState({
          watchList: data
        });
      }
    };

    _this._handlerHide = function () {
      _this.setState({
        isShow: false
      });
    };

    _this._handlerShow = function () {
      _this.setState({
        isShow: true
      });
    };

    _this._handlerToggleEditMode = function () {
      _this.setState({
        isModeEdit: !_this.state.isModeEdit
      });
    };

    _this._crGroupDraggableOption = function (isModeEdit, option) {
      return isModeEdit ? {
        draggable: true,
        onDragStart: _this._handlerDragStartGroup.bind(null, option),
        onDragEnter: _this._handlerDragEnterGroup,
        onDragOver: _this._handlerDragOverGroup,
        onDragLeave: _this._handlerDragLeaveGroup,
        onDrop: _this._handlerDropGroup.bind(null, option)
      } : void 0;
    };

    _this._crListDraggableOption = function (isModeEdit, option) {
      return isModeEdit ? {
        draggable: true,
        onDragStart: _this._handlerDragStartList.bind(null, option),
        onDragEnter: _this._handlerDragEnterList,
        onDragOver: _this._handlerDragOverList,
        onDragLeave: _this._handlerDragLeaveList,
        onDrop: _this._handlerDropList.bind(null, option)
      } : void 0;
    };

    _this._renderWatchList = function (watchList, TS) {
      var isModeEdit = _this.state.isModeEdit;
      return watchList.groups.map(function (group, index) {
        var caption = group.caption,
            lists = group.lists;
        return /*#__PURE__*/_react["default"].createElement(_Comp["default"].OpenClose2, {
          key: index,
          style: (0, _extends2["default"])({}, S.GROUP_DIV, TS.OPEN_CLOSE),
          styleCaption: S.CAPTION,
          caption: caption,
          draggableOption: _this._crGroupDraggableOption(isModeEdit, {
            caption: caption
          })
        }, lists && _this._renderLists(lists, caption, TS));
      });
    };

    _this._renderLists = function (lists, groupCaption, TS) {
      var isModeEdit = _this.state.isModeEdit;
      return lists.map(function (list, index) {
        var caption = list.caption,
            items = list.items;
        return /*#__PURE__*/_react["default"].createElement(_Comp["default"].OpenClose2, {
          key: index,
          fillOpen: C_FILL_OPEN,
          style: (0, _extends2["default"])({}, S.LIST_DIV, TS.OPEN_CLOSE),
          styleCaption: S.CAPTION,
          styleNotSelected: S.ITEM_NOT_SELECTED,
          caption: caption,
          draggableOption: _this._crListDraggableOption(isModeEdit, {
            groupCaption: groupCaption,
            caption: caption
          })
        }, items && _this._renderItems(items, groupCaption, caption));
      });
    };

    _this._renderItems = function (items, groupCaption, listCaption) {
      var isModeEdit = _this.state.isModeEdit;
      return items.map(function (item, index) {
        var id = item.id,
            caption = item.caption;
        return /*#__PURE__*/_react["default"].createElement(_WatchItem["default"], {
          key: id,
          className: CL_WATCH_ITEM,
          isModeEdit: isModeEdit,
          item: item,
          option: {
            groupCaption: groupCaption,
            listCaption: listCaption,
            caption: caption
          },
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

    _this._handlerDragStartGroup = _this._handlerDragStartGroup.bind((0, _assertThisInitialized2["default"])(_this));
    _this._handlerDropGroup = _this._handlerDropGroup.bind((0, _assertThisInitialized2["default"])(_this));
    _this._handlerDragEnterGroup = _this._handlerDragEnterGroup.bind((0, _assertThisInitialized2["default"])(_this));
    _this._handlerDragLeaveGroup = _this._handlerDragLeaveGroup.bind((0, _assertThisInitialized2["default"])(_this));
    _this._handlerDragStartList = _this._handlerDragStartList.bind((0, _assertThisInitialized2["default"])(_this));
    _this._handlerDropList = _this._handlerDropList.bind((0, _assertThisInitialized2["default"])(_this));
    _this._handlerDragEnterList = _this._handlerDragEnterList.bind((0, _assertThisInitialized2["default"])(_this));
    _this._handlerDragLeaveList = _this._handlerDragLeaveList.bind((0, _assertThisInitialized2["default"])(_this));
    _this._handlerDragStartItem = _this._handlerDragStartItem.bind((0, _assertThisInitialized2["default"])(_this));
    _this._handlerDropItem = _this._handlerDropItem.bind((0, _assertThisInitialized2["default"])(_this));
    _this._handlerDragEnterItem = _this._handlerDragEnterItem.bind((0, _assertThisInitialized2["default"])(_this));
    _this._handlerDragLeaveItem = _this._handlerDragLeaveItem.bind((0, _assertThisInitialized2["default"])(_this));
    _this._handlerClickItem = _this._handlerClickItem.bind((0, _assertThisInitialized2["default"])(_this));
    var isInitShow = props.isInitShow,
        store = props.store;
    _this.state = {
      isShow: !!isInitShow,
      isModeEdit: false,
      watchList: store.getWatchList()
    };
    return _this;
  }

  var _proto = WatchBrowser.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto._handlerSaveWatch = function _handlerSaveWatch() {
    saveWatch();
  };

  _proto._handlerEditGroup = function _handlerEditGroup() {
    _ComponentActions["default"].showModalDialog(_Type.ModalDialog.EDIT_WATCH_GROUP);
  };

  _proto._handlerEditList = function _handlerEditList() {
    _ComponentActions["default"].showModalDialog(_Type.ModalDialog.EDIT_WATCH_LIST);
  };

  _proto._handlerClickItem = function _handlerClickItem(item) {
    this.props.onClickItem(item); //ComponentActions.showModalDialog(ModalDialog.LOAD_ITEM, item)
  };

  _proto._handlerRemoveItem = function _handlerRemoveItem(option, event) {
    event.stopPropagation();
    removeWatchItem(option);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        theme = _this$props2.theme,
        caption = _this$props2.caption,
        _this$state = this.state,
        isShow = _this$state.isShow,
        isModeEdit = _this$state.isModeEdit,
        watchList = _this$state.watchList,
        _captionEV = isModeEdit ? 'V' : 'E',
        _spStyle = isModeEdit ? (0, _extends2["default"])({}, S.SP, S.SP_SHORT) : S.SP,
        TS = theme.createStyle(_MenuBrowserStyle["default"]);

    return /*#__PURE__*/_react["default"].createElement(_Comp["default"].Browser, {
      isShow: isShow,
      style: (0, _extends2["default"])({}, S.BROWSER, TS.BROWSER)
    }, /*#__PURE__*/_react["default"].createElement(_Comp["default"].BrowserCaption, {
      rootStyle: TS.BROWSER_CAPTION,
      caption: caption,
      onClose: this._handlerHide
    }, /*#__PURE__*/_react["default"].createElement(_Comp["default"].CircleButton, {
      caption: "S",
      title: T.S,
      style: S.BT_CIRCLE,
      onClick: this._handlerSaveWatch
    }), /*#__PURE__*/_react["default"].createElement(_Comp["default"].CircleButton, {
      caption: _captionEV,
      title: T.E_V,
      style: S.BT_CIRCLE,
      onClick: this._handlerToggleEditMode
    })), /*#__PURE__*/_react["default"].createElement(_EditBar["default"], {
      isShow: isModeEdit,
      onClickGroup: this._handlerEditGroup,
      onClickList: this._handlerEditList
    }), /*#__PURE__*/_react["default"].createElement(_Comp["default"].ScrollPane, {
      className: TS.CL_SCROLL_PANE,
      style: _spStyle
    }, watchList && this._renderWatchList(watchList, TS)));
  };

  return WatchBrowser;
}(_react.Component), _class2.defaultProps = {
  onClickItem: function onClickItem() {}
}, _temp)) || _class) || _class) || _class) || _class);

var _default = (0, _withTheme["default"])(WatchBrowser);

exports["default"] = _default;
//# sourceMappingURL=WatchBrowser.js.map