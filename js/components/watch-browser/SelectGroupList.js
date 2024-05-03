"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useRefItemCaption = _interopRequireDefault(require("./useRefItemCaption"));
var _useListOptions = _interopRequireDefault(require("./useListOptions"));
var _RowInputSelect = _interopRequireDefault(require("./RowInputSelect"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from "prop-types";

const SelectGroupList = props => {
  const {
      refEl,
      id,
      inputStyle,
      getWatchListsByGroup,
      groupOptions,
      groupCaption,
      listCaption
    } = props,
    _refCaptionGroup = (0, _uiApi.useRef)(null),
    [_refCaptionList, _hSelectList] = (0, _useRefItemCaption.default)(),
    [listOptions, setListOptions, updateListOptions] = (0, _useListOptions.default)(getWatchListsByGroup, _refCaptionList)

    /*eslint-disable react-hooks/exhaustive-deps */,
    _hSelectGroup = (0, _uiApi.useCallback)(item => {
      const {
        caption,
        lists
      } = item || {};
      if (caption) {
        (0, _uiApi.setRefValue)(_refCaptionGroup, caption);
        setListOptions(lists || []);
      } else {
        (0, _uiApi.setRefValue)(_refCaptionGroup, null);
      }
    }, []);
  // setListOptions
  /*eslint-enable react-hooks/exhaustive-deps */

  // sync store with state on props update
  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => {
    const _captionGroup = (0, _uiApi.getRefValue)(_refCaptionGroup);
    if (props.groupOptions !== groupOptions) {
      (0, _uiApi.setRefValue)(_refCaptionGroup, null);
      (0, _uiApi.setRefValue)(_refCaptionList, null);
      setListOptions([]);
    } else if (_captionGroup) {
      updateListOptions(_captionGroup);
    }
  }, [props]);
  // _refCaptionList, groupOptions
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useImperativeHandle)(refEl, () => ({
    getValue: () => [(0, _uiApi.getRefValue)(_refCaptionGroup), (0, _uiApi.getRefValue)(_refCaptionList)]
  }), []);
  // _refCaptionList
  /*eslint-enable react-hooks/exhaustive-deps */

  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_RowInputSelect.default, {
      id: id + "-g",
      inputStyle: inputStyle,
      caption: groupCaption,
      options: groupOptions,
      onSelect: _hSelectGroup
    }), (0, _jsxRuntime.jsx)(_RowInputSelect.default, {
      id: id + "-l",
      inputStyle: inputStyle,
      caption: listCaption,
      options: listOptions,
      onSelect: _hSelectList
    })]
  });
};

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
var _default = exports.default = SelectGroupList;
//# sourceMappingURL=SelectGroupList.js.map