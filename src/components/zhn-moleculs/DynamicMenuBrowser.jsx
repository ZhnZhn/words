import {
  useState,
  useEffect
} from '../uiApi';

import useBool from '../hooks/useBool';

import Browser from '../zhn/Browser';
import BrowserCaption from '../zhn/BrowserCaption';
import ScrollPane from '../zhn/ScrollPane';
import SpinnerLoading from '../zhn/SpinnerLoading';

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
, DF_MENU_MODEL = {};

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
  url,
  browserId,
  useBrowser,
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

  useBrowser(browser => {
    if (browser && browser.id === browserId) {
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
    <Browser
       isShow={isShow}
       style={S_BROWSER}
     >
      <BrowserCaption
        caption={caption}
        onClose={closeMenuBrowser}
      />
      {
        isLoading && <SpinnerLoading
          style={S_SPINNER_LOADING}
        />
      }
      {
        isLoadingFailed && <SpinnerLoading
          style={S_SPINNER_LOADING}
          isFailed={true}
        />
       }
      <ScrollPane
        style={S_SCROLL_PANE}
      >
        <MenuParts
          menuModel={menuModel}
          restProps={restProps}
        />
        {children}
      </ScrollPane>
    </Browser>
  );
};

export default DynamicMenuBrowser
