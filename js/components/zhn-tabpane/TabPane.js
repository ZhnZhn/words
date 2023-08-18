"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _tabPaneFn = require("./tabPaneFn");
var _jsxRuntime = require("preact/jsx-runtime");
const S_TABS = {
    margin: '5px 5px 10px 12px'
  },
  S_COMPONENTS = {
    width: "100%",
    height: "100%"
  },
  S_BLOCK = {
    display: 'block',
    width: "100%",
    height: "100%"
  },
  S_NONE = {
    display: 'none'
  };
const _crNextId = (id, childrenLength) => id === -1 ? childrenLength - 1 : id === childrenLength ? 0 : id;
const TabPane = (0, _uiApi.memo)(_ref => {
  let {
    id,
    width,
    height,
    children
  } = _ref;
  const [selectedTabIndex, setSelectedTabIndex] = (0, _uiApi.useState)(0),
    _isSelectedTabIndex = index => index === selectedTabIndex,
    _hKeyDown = (index, evt) => {
      const _focusTabByIndex = tabIndex => {
        const _nextIndex = _crNextId(tabIndex, children.length);
        (0, _uiApi.focusElementById)((0, _tabPaneFn.crTabId)(id, _nextIndex));
        setSelectedTabIndex(_nextIndex);
      };
      const {
        keyCode
      } = evt;
      if (keyCode === 39) {
        (0, _uiApi.stopDefaultFor)(evt);
        _focusTabByIndex(index + 1);
      }
      if (keyCode === 37) {
        (0, _uiApi.stopDefaultFor)(evt);
        _focusTabByIndex(index - 1);
      }
    };
  return (0, _jsxRuntime.jsxs)("div", {
    style: {
      width,
      height
    },
    children: [(0, _jsxRuntime.jsx)("div", {
      style: S_TABS,
      children: children.map((tab, index) => {
        const isSelected = _isSelectedTabIndex(index);
        return (0, _uiApi.cloneElement)(tab, {
          key: index,
          isSelected,
          tabId: (0, _tabPaneFn.crTabId)(id, index),
          tabPanelId: (0, _tabPaneFn.crTabPanelId)(id, index),
          className: (0, _tabPaneFn.crTabCn)(isSelected),
          onClick: () => setSelectedTabIndex(index),
          onKeyDown: evt => _hKeyDown(index, evt)
        });
      })
    }), (0, _jsxRuntime.jsx)("div", {
      style: S_COMPONENTS,
      children: children.map((tab, index) => {
        const isSelected = _isSelectedTabIndex(index);
        return (0, _jsxRuntime.jsx)("div", {
          style: isSelected ? S_BLOCK : S_NONE,
          role: "tabpanel",
          id: (0, _tabPaneFn.crTabPanelId)(id, index),
          "aria-labelledby": (0, _tabPaneFn.crTabId)(id, index),
          children: (0, _uiApi.cloneElement)(tab.props.children, {
            isSelected
          })
        }, index);
      })
    })]
  });
});
var _default = TabPane;
exports.default = _default;
//# sourceMappingURL=TabPane.js.map