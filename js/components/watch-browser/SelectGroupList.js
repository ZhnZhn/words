"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _useRefItemCaption2 = _interopRequireDefault(require("./useRefItemCaption"));

var _RowInputSelect = _interopRequireDefault(require("./RowInputSelect"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var SelectGroupList = (0, _uiApi.forwardRef)(function (props, ref) {
  var inputStyle = props.inputStyle,
      store = props.store,
      groupOptions = props.groupOptions,
      groupCaption = props.groupCaption,
      listCaption = props.listCaption,
      _refCaptionGroup = (0, _uiApi.useRef)(null),
      _useRefItemCaption = (0, _useRefItemCaption2["default"])(),
      _refCaptionList = _useRefItemCaption[0],
      _hSelectList = _useRefItemCaption[1],
      _useState = (0, _uiApi.useState)([]),
      listOptions = _useState[0],
      setListOptions = _useState[1],
      _hSelectGroup = (0, _uiApi.useCallback)(function (item) {
    var _ref = item || {},
        caption = _ref.caption,
        lists = _ref.lists;

    if (caption) {
      (0, _uiApi.setRefValue)(_refCaptionGroup, caption);
      setListOptions(lists || []);
    } else {
      (0, _uiApi.setRefValue)(_refCaptionGroup, null);
    }
  }, []); // sync store with state on props update

  /*eslint-disable react-hooks/exhaustive-deps */


  (0, _uiApi.useEffect)(function () {
    var captionGroup = (0, _uiApi.getRefValue)(_refCaptionGroup);

    if (props.groupOptions !== groupOptions) {
      (0, _uiApi.setRefValue)(_refCaptionGroup, null);
      (0, _uiApi.setRefValue)(_refCaptionList, null);
      setListOptions([]);
    } else if (captionGroup) {
      setListOptions(function (prevListOptions) {
        var listOptions = store.getWatchListsByGroup(captionGroup);

        if (prevListOptions !== listOptions) {
          (0, _uiApi.setRefValue)(_refCaptionList, null);
        }

        return listOptions;
      });
    }
  }, [props]); // _refCaptionList, groupOptions, store

  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */

  (0, _uiApi.useImperativeHandle)(ref, function () {
    return {
      getValue: function getValue() {
        return {
          captionGroup: (0, _uiApi.getRefValue)(_refCaptionGroup),
          captionList: (0, _uiApi.getRefValue)(_refCaptionList)
        };
      }
    };
  }, []); // _refCaptionList

  /*eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputSelect["default"], {
      inputStyle: inputStyle,
      caption: groupCaption,
      options: groupOptions,
      onSelect: _hSelectGroup
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputSelect["default"], {
      inputStyle: inputStyle,
      caption: listCaption,
      options: listOptions,
      onSelect: _hSelectList
    })]
  });
});
/*
SelectGroupList.propTypes = {
  store: PropTypes.shape({
    listen: PropTypes.func,
    getWatchListsByGroup: PropTypes.func
  }),
  groupCaption: PropTypes.string,
  groupOptions: PropTypes.array,
  listCaption: PropTypes.string
}
*/

var _default = SelectGroupList;
exports["default"] = _default;
//# sourceMappingURL=SelectGroupList.js.map