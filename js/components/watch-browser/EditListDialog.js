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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Dialog = require('../dialogs/Dialog.Style');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _WatchActions = require('../../flux/actions/WatchActions');

var _WatchActions2 = _interopRequireDefault(_WatchActions);

var _MsgWatch = require('../../constants/MsgWatch');

var _MsgWatch2 = _interopRequireDefault(_MsgWatch);

var _ModalDialog = require('../zhn-moleculs/ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

var _Atoms = require('../zhn-atoms/Atoms');

var _Atoms2 = _interopRequireDefault(_Atoms);

var _ListCreatePane = require('./ListCreatePane');

var _ListCreatePane2 = _interopRequireDefault(_ListCreatePane);

var _ListEditPane = require('./ListEditPane');

var _ListEditPane2 = _interopRequireDefault(_ListEditPane);

var _ListDeletePane = require('./ListDeletePane');

var _ListDeletePane2 = _interopRequireDefault(_ListDeletePane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createList = _WatchActions2.default.createList,
    renameList = _WatchActions2.default.renameList,
    deleteList = _WatchActions2.default.deleteList;
//import PropTypes from "prop-types";

var EDIT_WATCH_COMPLETED = _WatchActions.WatchActionTypes.EDIT_WATCH_COMPLETED,
    EDIT_WATCH_FAILED = _WatchActions.WatchActionTypes.EDIT_WATCH_FAILED,
    CREATE_LIST = _WatchActions.WatchActionTypes.CREATE_LIST,
    RENAME_LIST = _WatchActions.WatchActionTypes.RENAME_LIST,
    DELETE_LIST = _WatchActions.WatchActionTypes.DELETE_LIST;
var notSelected = _MsgWatch2.default.notSelected,
    emptyName = _MsgWatch2.default.emptyName;


var TAB_PANE_WIDTH = "380px";

var EditListDialog = function (_Component) {
  (0, _inherits3.default)(EditListDialog, _Component);

  function EditListDialog() {
    (0, _classCallCheck3.default)(this, EditListDialog);
    return (0, _possibleConstructorReturn3.default)(this, (EditListDialog.__proto__ || Object.getPrototypeOf(EditListDialog)).apply(this, arguments));
  }

  (0, _createClass3.default)(EditListDialog, [{
    key: 'shouldComponentUpdate',

    /*
    static propTypes = {
      isShow : PropTypes.bool,
      store : PropTypes.object,
      onClose : PropTypes.func
    }
    */

    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
        return false;
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          isShow = _props.isShow,
          store = _props.store,
          onClose = _props.onClose,
          TS = theme.createStyle(_Dialog2.default);

      return _react2.default.createElement(
        _ModalDialog2.default
        //STYLE={TS.BT}
        ,
        { style: TS.R_DIALOG,
          captionStyle: TS.BROWSER_CAPTION,
          caption: 'Watch Lists Edit',
          isShow: isShow,
          isWithButton: false,
          onClose: onClose
        },
        _react2.default.createElement(
          _Atoms2.default.TabPane,
          { width: TAB_PANE_WIDTH, isUpdateInit: true },
          _react2.default.createElement(
            _Atoms2.default.Tab,
            { title: 'Create', style: TS.TAB },
            _react2.default.createElement(_ListCreatePane2.default, {
              store: store,
              inputStyle: TS.INPUT,
              btStyle: TS.BT.FLAT_ROOT,
              actionCompleted: EDIT_WATCH_COMPLETED,
              actionFailed: EDIT_WATCH_FAILED,
              forActionType: CREATE_LIST,
              msgOnNotSelect: notSelected,
              msgOnIsEmptyName: emptyName,
              onCreate: createList,
              onClose: onClose })
          ),
          _react2.default.createElement(
            _Atoms2.default.Tab,
            { title: 'Rename', style: TS.TAB },
            _react2.default.createElement(_ListEditPane2.default, {
              store: store,
              inputStyle: TS.INPUT,
              btStyle: TS.BT.FLAT_ROOT,
              actionCompleted: EDIT_WATCH_COMPLETED,
              actionFailed: EDIT_WATCH_FAILED,
              forActionType: RENAME_LIST,
              msgOnNotSelect: notSelected,
              msgOnIsEmptyName: emptyName,
              onRename: renameList,
              onClose: onClose
            })
          ),
          _react2.default.createElement(
            _Atoms2.default.Tab,
            { title: 'Delete', style: TS.TAB },
            _react2.default.createElement(_ListDeletePane2.default, {
              store: store,
              inputStyle: TS.INPUT,
              btStyle: TS.BT.FLAT_ROOT,
              actionCompleted: EDIT_WATCH_COMPLETED,
              actionFailed: EDIT_WATCH_FAILED,
              forActionType: DELETE_LIST,
              msgOnNotSelect: notSelected,
              onDelete: deleteList,
              onClose: onClose
            })
          )
        )
      );
    }
  }]);
  return EditListDialog;
}(_react.Component);

exports.default = (0, _withTheme2.default)(EditListDialog);
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\watch-browser\EditListDialog.js.map