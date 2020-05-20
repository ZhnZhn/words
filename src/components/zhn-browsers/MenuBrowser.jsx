import React from 'react'

import useTheme from '../hoc/useTheme'
import styleConfig from '../styles/MenuBrowserStyle'

import DynamicMenuBrowser from '../zhn-moleculs/DynamicMenuBrowser'

const MenuBrowser = (props) => {
  const TS = useTheme(styleConfig);
  return (
    <DynamicMenuBrowser
       {...props}
       styleConfig={TS}
       caption="Words Sources"
       url="data/words-source-menu.json"
    />
  );
}

/*
MenuBrowser.propTypes = {
  store: PropTypes.object,
  showAction: PropTypes.string,
  browserId: PropTypes.string,
  onClickItem: PropTypes.func
}
*/

export default MenuBrowser
