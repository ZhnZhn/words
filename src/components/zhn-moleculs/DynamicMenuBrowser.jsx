import {
  useState,
  useEffect
} from '../uiApi';

import useBool from '../hooks/useBool';
import useSubscribe from '../hooks/useSubscribe';

import A from '../zhn-atoms/Atoms';
import MenuPart from './MenuPart';

const S_BROWSER = {
  paddingRight: 0
}
, S_SCROLL_PANE = {
  overflowY: 'auto',
  height: '92%',
  paddingRight: 10

}
, S_SPINNER_LOADING = {
  position: 'relative',
  display: 'block',
  width: 32,
  height: 32,
  margin: '0 auto',
  marginTop: 32,
  textAlign: 'middle'
};

const FN_NOOP = () => {}
, DF_MENU_MODEL = {}
, DF_STYLE_CONFIG = {};

const MenuParts = ({
  styleConfig,
  menuModel,
  restProps
}) => {
  const {
    menu,
    items={}
  } = menuModel;
  return (menu || []).map((menuPart, index) => (
    <MenuPart
      {...menuPart}
      key={index}
      hmItems={items}
      styleConfig={styleConfig}
      {...restProps}
    />
  ));
}

const DynamicMenuBrowser = ({
  store,
  compStore,
  url,
  browserId,
  selectBrowser,
  styleConfig:TS=DF_STYLE_CONFIG,
  caption,
  children,
  onError=FN_NOOP,
  ...restProps
}) => {
  const [
    menuModel,
    setMenuModel
  ] = useState(DF_MENU_MODEL)
  , [
    isShow,
    openMenuBrowser,
    closeMenuBrowser
  ] = useBool()
  , [
    isLoading,
    /*eslint-disable no-unused-vars */
    setLoading,
    /*eslint-enable no-unused-vars */
    setNotLoading
  ] = useBool(true)
  , [
    isLoadingFailed,
    setLoadingFailed
  ] = useBool();

  useSubscribe(compStore, selectBrowser, (browser) => {
    if (browser.id === browserId) {
      openMenuBrowser()
    }
  })

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    fetch(url)
      .then(response => {
          const { status } = response;
          if (status>=200 && status<400){
            return response.json();
          } else {
            throw { status, url };
          }
      })
      .then(json => {
        setNotLoading()
        setMenuModel(json)
      })
      .catch(err => {
         setLoadingFailed()
         setNotLoading()
         onError(err)
      })
  }, [])
  // url, onError
  // setNotLoading, setLoadingFailed
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <A.Browser
       isShow={isShow}
       style={{...S_BROWSER, ...TS.BROWSER}}
     >
      <A.BrowserCaption
        rootStyle={TS.BROWSER_CAPTION}
        caption={caption}
        onClose={closeMenuBrowser}
      />
      {
        isLoading &&
        <A.SpinnerLoading
             style={S_SPINNER_LOADING}
        />
      }
      {
        isLoadingFailed &&
        <A.SpinnerLoading
           style={S_SPINNER_LOADING}
           isFailed={true}
         />
       }
      <A.ScrollPane
         className={TS.CL_SCROLL_PANE}
         style={S_SCROLL_PANE}
      >
        <MenuParts
          styleConfig={TS}
          menuModel={menuModel}
          restProps={restProps}
        />
        {children}
      </A.ScrollPane>
    </A.Browser>
  );
};

export default DynamicMenuBrowser
