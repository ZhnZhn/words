import {
  useRef,
  useCallback,
  getRefValue
} from '../uiApi';

import {
  setUiTheme
} from '../styles/theme';
import {
  enableAutoSave,
  disableAutoSave
} from '../../flux/settingStore';

import ModalDialog from '../zhn-moleculs/ModalDialog';
import TabPane from '../zhn-tabpane/TabPane';
import Tab from '../zhn-tabpane/Tab';

import CardApiKey from './CardApiKey';
import CardUi from './CardUi';

const S_MODAL = {
  position: 'static',
  zIndex: 10,
  width: 350,
  height: 290,
  margin: '70px auto 0px',
  borderRadius: 5,
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px'
}
, S_TAB_PANE = {
   width: "100%"
}
, S_CARD_ROOT = {
  position: 'relative',
  height: 200
}
, S_CARD_BUTTONS = {
  position: 'absolute',
  right: 4,
  bottom: 4,
  cursor: 'default'
};

const SettingsDialog = ({
  isShow,
  data,
  onClose
}) => {
  const _refSetKey1 = useRef(data.key1)
  , _ref1 = useRef()
  , _selectTheme = useCallback(item => {
    setUiTheme((item || {}).value)
  }, [])
  , _hSetAndClose = useCallback(() => {
     getRefValue(_refSetKey1)(getRefValue(_ref1).getValue())
     onClose()
  }, [onClose]);

  return (
    <ModalDialog
       className=""
       style={S_MODAL}
       caption="User Settings"
       isShow={isShow}
       isWithButton={false}
       onClose={onClose}
    >
      <TabPane id="sd" style={S_TAB_PANE} >
        <Tab title="API Key">
           <CardApiKey
             refEl={_ref1}
             style={S_CARD_ROOT}
             buttonsStyle={S_CARD_BUTTONS}
             isShow={isShow}
             onSet={_hSetAndClose}
             onClose={onClose}
           />
        </Tab>
        <Tab title="UI Theme">
           <CardUi
             style={S_CARD_ROOT}
             buttonsStyle={S_CARD_BUTTONS}
             onSetTheme={_selectTheme}
             onCheckAutoSave={enableAutoSave}
             onUncheckAutoSave={disableAutoSave}
             onClose={onClose}
           />
        </Tab>
      </TabPane>
    </ModalDialog>
  );
};

export default SettingsDialog
