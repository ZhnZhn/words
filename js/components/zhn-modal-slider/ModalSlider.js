"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.ModalSliderMemoIsShow = exports.ModalSlider = void 0;
var _bindTo = require("../../utils/bindTo");
var _styleFn = require("../styleFn");
var _memoIsShow = _interopRequireDefault(require("../hoc/memoIsShow"));
var _useInitStateFromProps = _interopRequireDefault(require("../hooks/useInitStateFromProps"));
var _useThrottleCallback = _interopRequireDefault(require("../hooks/useThrottleCallback"));
var _ModalPane = _interopRequireDefault(require("../zhn-moleculs/ModalPane"));
var _MenuPages = _interopRequireDefault(require("./MenuPages"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_SLIDER_PAGES = 'slider-pages',
  S_MODAL_PANE = {
    position: 'absolute',
    overflow: 'hidden'
  },
  DF_INIT_ID = 'p0',
  DF_MODEL = {
    pageWidth: 100,
    maxPages: 2,
    initId: DF_INIT_ID,
    p0: []
  };
const _crWidthStyle = v => ({
  width: v
});
const _crMenuPageProps = (id, model, title) => ({
  key: id,
  items: model[id],
  titleCl: model.titleCl,
  itemCl: model.itemCl || model.titleCl,
  title
});
const _addPage = (model, pages, id, title) => {
  pages.push(_crMenuPageProps(id, model, title));
};
const _initState = model => {
  const _pW = model.pageWidth,
    _initId = model.initId || DF_INIT_ID;
  return {
    addPage: (0, _bindTo.bindTo)(_addPage, model),
    pageWidth: _pW,
    pageStyle: _crWidthStyle(_pW),
    pageCurrent: 1,
    pages: [_crMenuPageProps(_initId, model)]
  };
};
const ModalSlider = _ref => {
  let {
    model = DF_MODEL,
    isShow,
    className,
    onClose
  } = _ref;
  const [state, setState] = (0, _useInitStateFromProps.default)(_initState, model),
    {
      pageWidth,
      pageStyle,
      pageCurrent,
      pages
    } = state,
    hPrevPage = (0, _useThrottleCallback.default)(pageNumber => {
      setState(prevState => {
        prevState.pageCurrent = pageNumber - 1;
        return {
          ...prevState
        };
      });
    }),
    hNextPage = (0, _useThrottleCallback.default)((id, title, pageNumber) => {
      setState(prevState => {
        const {
            addPage,
            pages
          } = prevState,
          _max = pages.length - 1;
        if (_max + 1 > pageNumber) {
          if (pages[pageNumber] && pages[pageNumber].key !== id) {
            if (pageNumber > 0) {
              prevState.pages.splice(pageNumber);
            } else {
              prevState.pages = [];
            }
            addPage(prevState.pages, id, title);
          }
        } else {
          addPage(pages, id, title);
        }
        prevState.pageCurrent = pageNumber + 1;
        return {
          ...prevState
        };
      });
    });
  return (0, _jsxRuntime.jsx)(_ModalPane.default, {
    isShow: isShow,
    className: (0, _styleFn.crCn)(_styleFn.CL_POPUP_MENU, className),
    style: {
      ...S_MODAL_PANE,
      ...pageStyle
    },
    onClose: onClose,
    children: (0, _jsxRuntime.jsx)("div", {
      className: CL_SLIDER_PAGES,
      style: (0, _styleFn.crSliderTransformStyle)(pageWidth, pageCurrent),
      children: (0, _jsxRuntime.jsx)(_MenuPages.default, {
        isShow: isShow,
        style: pageStyle,
        pages: pages,
        pageCurrent: pageCurrent,
        onNextPage: hNextPage,
        onPrevPage: hPrevPage,
        onClose: onClose
      })
    })
  });
};
exports.ModalSlider = ModalSlider;
const ModalSliderMemoIsShow = exports.ModalSliderMemoIsShow = (0, _memoIsShow.default)(ModalSlider);
//# sourceMappingURL=ModalSlider.js.map