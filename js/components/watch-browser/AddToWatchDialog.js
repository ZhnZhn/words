"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Dialog = _interopRequireDefault(require("../dialogs/Dialog.Style"));

var _WatchActions = _interopRequireWildcard(require("../../flux/actions/WatchActions"));

var _MsgWatch = require("../../constants/MsgWatch");

var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));

var _RowInputSelect = _interopRequireDefault(require("./RowInputSelect"));

var _Row = _interopRequireDefault(require("../dialogs/Row"));

var _withValidationLoad = _interopRequireDefault(require("../dialogs/decorators/withValidationLoad"));

var _Atoms = _interopRequireDefault(require("./Atoms"));

var _jsxRuntime = require("react/jsx-runtime");

var _class;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var actionCompleted = _WatchActions.WatchActionTypes.EDIT_WATCH_COMPLETED,
    actionFailed = _WatchActions.WatchActionTypes.EDIT_WATCH_FAILED,
    forActionType = _WatchActions.WatchActionTypes.ADD_ITEM;
var CL_BT_DIV = 'bt-flat__div';
var S2 = {
  DIALOG: {
    left: 'calc(50vw - 142px)'
  },
  BT_ROOT: {
    color: '#3270b4'
  }
};

var AddToWatchDialog = (0, _withValidationLoad["default"])(_class = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(AddToWatchDialog, _Component);

  /*
  static propTypes = {
    isShow  : PropTypes.bool,
    data    : PropTypes.object,
    store   : PropTypes.shape({
      listen: PropTypes.func,
      getWatchGroups: PropTypes.func,
      getWatchListsByGroup: PropTypes.func
    }),
    onClose : PropTypes.func
  }
  */
  function AddToWatchDialog(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._onStore = function (actionType, data) {
      if (actionType === actionCompleted && data.forActionType === forActionType) {
        if (_this.state.validationMessages.length > 0) {
          _this.setState({
            validationMessages: []
          });
        }

        _this.props.onClose();
      } else if (actionType === actionFailed && data.forActionType === forActionType) {
        _this.setState({
          validationMessages: data.messages
        });
      }
    };

    _this._handleSelectGroup = function (group) {
      if (group && group.caption) {
        _this.groupCaption = group.caption;

        if (group.lists) {
          _this.setState({
            listOptions: group.lists
          });
        } else {
          _this.setState({
            listOptions: []
          });
        }
      } else {
        _this.groupCaption = null;
      }
    };

    _this._handleSelectList = function (list) {
      if (list && list.caption) {
        _this.listCaption = list.caption;
      } else {
        _this.listCaption = null;
      }
    };

    _this._handleAdd = function () {
      var validationMessages = _this._getValidationMessages();

      if (validationMessages.isValid) {
        var data = _this.props.data,
            caption = data.caption,
            config = data.config,
            _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
            groupCaption = _assertThisInitialize.groupCaption,
            listCaption = _assertThisInitialize.listCaption;

        _WatchActions["default"].addWatchItem({
          caption: caption,
          groupCaption: groupCaption,
          listCaption: listCaption,
          config: config
        });
      } else {
        _this._updateValidationMessages(validationMessages);
      }
    };

    _this._getValidationMessages = function () {
      var msg = [];

      if (!_this.groupCaption) {
        msg.push((0, _MsgWatch.notSelected)('Group'));
      }

      if (!_this.listCaption) {
        msg.push((0, _MsgWatch.notSelected)('List'));
      }

      msg.isValid = msg.length === 0 ? true : false;
      return msg;
    };

    _this._handleClose = function () {
      if (_this.state.validationMessages.length > 0) {
        _this.setState({
          validationMessages: []
        });
      }

      _this.props.onClose();
    };

    _this._crCommandButtons = function (S) {
      return [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].Button.Flat, {
        caption: "Add",
        title: "Add Item To Watch List",
        rootStyle: S2.BT_ROOT,
        clDiv: CL_BT_DIV,
        onClick: _this._handleAdd
      }, "_add")];
    };

    _this.groupCaption = null;
    _this.listCaption = null;
    _this.state = {
      groupOptions: props.store.getWatchGroups(),
      listOptions: [],
      validationMessages: []
    };
    return _this;
  }

  var _proto = AddToWatchDialog.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  };

  _proto.componetWillUnmount = function componetWillUnmount() {
    this.unsubscribe();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    //Update group and list options from store
    var _this$props = this.props,
        isShow = _this$props.isShow,
        store = _this$props.store;

    if (prevProps !== this.props && isShow) {
      var groupOptions = store.getWatchGroups();

      if (groupOptions !== this.state.groupOptions) {
        this.groupCaption = null;
        this.listCaption = null;
        this.setState({
          groupOptions: groupOptions,
          listOptions: []
        });
      } else if (this.groupCaption) {
        var listOptions = store.getWatchListsByGroup(this.groupCaption);

        if (listOptions !== this.state.listOptions) {
          this.listCaption = null;
          this.setState({
            listOptions: listOptions
          });
        }
      }
    }
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }

    return true;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        theme = _this$props2.theme,
        isShow = _this$props2.isShow,
        data = _this$props2.data,
        caption = data.caption,
        _this$state = this.state,
        groupOptions = _this$state.groupOptions,
        listOptions = _this$state.listOptions,
        validationMessages = _this$state.validationMessages,
        TS = theme.createStyle(_Dialog["default"]),
        _commandButtons = this._crCommandButtons(TS.BT);

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ModalDialog["default"], {
      STYLE: TS.BT,
      style: (0, _extends2["default"])({}, TS.R_DIALOG, S2.DIALOG),
      captionStyle: TS.BROWSER_CAPTION,
      caption: "Add To Watch List",
      isShow: isShow,
      commandButtons: _commandButtons,
      onClose: this._handleClose,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputSelect["default"], {
          inputStyle: TS.INPUT,
          caption: "Group:",
          options: groupOptions,
          onSelect: this._handleSelectGroup
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputSelect["default"], {
          inputStyle: TS.INPUT,
          caption: "List:",
          onSelect: this._handleSelectList,
          options: listOptions
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row["default"].Text, {
        caption: "Word:",
        text: caption
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].ValidationMessages, {
        validationMessages: validationMessages
      })]
    });
  };

  return AddToWatchDialog;
}(_react.Component)) || _class;

var _default = (0, _withTheme["default"])(AddToWatchDialog);

exports["default"] = _default;
//# sourceMappingURL=AddToWatchDialog.js.map