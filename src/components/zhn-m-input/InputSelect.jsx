import {
  useId,
  useRef,
  useState,
  useMemo,
  KEY_ARROW_DOWN,
  focusRefElement,
  stopDefaultFor
} from '../uiApi';

import useBool from '../hooks/useBool';

import ArrowCell from './ArrowCell';
import OptionsPane from './OptionsPane';
import {
  getItemCaption
} from './OptionFn';

const CL_SELECT = 'm-select'
, CL_LABEL = `${CL_SELECT}__label`
, CL_DIV = `${CL_SELECT}__div`
, CL_DIV_VALUE = `${CL_DIV}__value`
, CL_DIV_BT = `${CL_DIV}__bt`
, CL_INPUT_LINE = `${CL_SELECT}__line`
, CL_SELECT_OPTIONS = `${CL_SELECT}__options with-scroll`
, CL_ITEM = `${CL_SELECT}__item`;

const DF_INIT_ITEM = {
  caption: void 0,
  value: void 0
};

const InputSelect = ({
  id,
  initItem,
  caption,
  options,
  style,
  onSelect
}) => {
  const _listboxId = useId()
  , _refBtArrow = useRef()
  , [
    item,
    setItem
  ] = useState(initItem || DF_INIT_ITEM)
  , [
    isShowOptions,
    showOptions,
    hideOptions
  ] = useBool()
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hCloseOptions = useMemo(() => () => {
    hideOptions()
    focusRefElement(_refBtArrow)
  }, [])
  // hideOptions, _refBtArrow
  , [
    _hSelect,
    _hKeyDown
  ] = useMemo(() => [
    (item, evt) => {
        stopDefaultFor(evt)
        onSelect(item, id)
        _hCloseOptions()
        setItem(item)
    },
    // id, onSelect, _closeOptions
    (evt) => {
      if (evt.key === KEY_ARROW_DOWN) {
        stopDefaultFor(evt)
        showOptions()
      }
    }
    // showOptions
  ]
  , [])
  // hideOptions, _refBtArrow
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <div
      role="combobox"
      aria-expanded={isShowOptions}
      aria-controls={_listboxId}
      tabIndex="-1"
      className={CL_SELECT}
      style={style}
      onClick={showOptions}
      onKeyDown={_hKeyDown}
    >
      <label className={CL_LABEL}>
        {caption}
      </label>
      <OptionsPane
         id={_listboxId}
         isShow={isShowOptions}
         className={CL_SELECT_OPTIONS}
         item={item}
         options={options}
         clItem={CL_ITEM}
         onSelect={_hSelect}
         onClose={_hCloseOptions}
       />
      <div className={CL_DIV}>
        <div className={CL_DIV_VALUE}>
           {getItemCaption(item)}
        </div>
        <button
          ref={_refBtArrow}
          type="button"
          className={CL_DIV_BT}
        >
           <ArrowCell />
        </button>
        <div className={CL_INPUT_LINE} />
      </div>
    </div>
  );
}

export default InputSelect
