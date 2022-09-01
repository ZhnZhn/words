import {
  useState,
  useCallback,
  useEffect
} from '../uiApi';

import useBool from '../hooks/useBool';

import ArrowCell from './ArrowCell';
import OptionsPane from './OptionsPane';

const CL_SELECT = 'm-select'
, CL_LABEL = `${CL_SELECT}__label`
, CL_DIV = `${CL_SELECT}__div`
, CL_DIV_VALUE = `${CL_DIV}__value`
, CL_DIV_BT = `${CL_DIV}__bt`
, CL_INPUT_LINE = `${CL_SELECT}__line`
, CL_ITEM = `${CL_SELECT}__item`;

const FN_NOOP = () => {}
, DF_STYLE_CONFIG = {}
, DF_INITIAL_ITEM = {
  caption: '',
  value: ''
};

const InputSelect = ({
  caption,
  initItem=DF_INITIAL_ITEM,
  options,
  styleConfig:TS=DF_STYLE_CONFIG,
  onSelect=FN_NOOP
}) => {
  const [item, setItem] = useState(initItem)
  , [
    isShow,
    _hOpen,
    _hClose
  ] = useBool()
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hSelect = useCallback((item, event) => {
    event.stopPropagation()
    onSelect(item)
    _hClose()
    setItem(item)
  }, [onSelect])
  // _hClose
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    _hClose()
    setItem(initItem)
  }, [options])
  // _hClose, initItem
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <div
      role="presentation"
      className={CL_SELECT}
      style={TS.ROOT}
      onClick={_hOpen}
    >
      <OptionsPane
         rootStyle={TS.MODAL_PANE}
         isShow={isShow}
         item={item}
         options={options}
         clItem={TS.CL_ITEM || CL_ITEM}
         itemStyle={TS.ITEM}
         onSelect={_hSelect}
         onClose={_hClose}
       />
      <label className={CL_LABEL}>
        {caption}
      </label>
      <div className={CL_DIV}>
        <div className={CL_DIV_VALUE}>
           {item.caption}
        </div>
        <button className={CL_DIV_BT} tabIndex="0">
          <div>
            <ArrowCell />
          </div>
        </button>
        <div className={CL_INPUT_LINE} />
      </div>
    </div>
  );
};

export default InputSelect
