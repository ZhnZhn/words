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
, CL_CAPTION = `${CL_SELECT}__caption`
, CL_DIV = `${CL_SELECT}__div`
, CL_DIV_VALUE = `${CL_DIV}__value`
, CL_DIV_BT = `${CL_DIV}__bt`
, CL_INPUT_LINE = `${CL_SELECT}__line`
, CL_SELECT_OPTIONS = `${CL_SELECT}__options with-scroll`
, CL_ITEM = `${CL_SELECT}__item`
, DF_CAPTION = 'Item'
, DF_INIT_ITEM = {
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
  , _refBtCombobox = useRef()
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
    focusRefElement(_refBtCombobox)
  }, [])
  // hideOptions, _refBtCombobox
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
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <button
      ref={_refBtCombobox}
      type="button"
      role="combobox"
      aria-expanded={isShowOptions}
      aria-controls={_listboxId}
      aria-label={`Select ${caption || DF_CAPTION}`}
      className={CL_SELECT}
      style={style}
      onClick={showOptions}
      onKeyDown={_hKeyDown}
    >
      <div className={CL_CAPTION}>
        {caption}
      </div>
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
        <div className={CL_DIV_BT}>
          <ArrowCell />
        </div>
        <div className={CL_INPUT_LINE} />
      </div>
    </button>
  );
}

export default InputSelect
