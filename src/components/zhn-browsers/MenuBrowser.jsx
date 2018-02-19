import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from '../styles/MenuBrowserStyle'

import DynamicMenuBrowser from '../zhn-moleculs/DynamicMenuBrowser'

class MenuBrowser extends Component {
  render(){
    const {
            theme,
            store,
            showAction, browserId,
            onClickItem
          } = this.props
        , TS = theme.createStyle(styleConfig);

    return (
      <DynamicMenuBrowser
         styleConfig={TS}
         store={store}
         showAction={showAction}
         browserId={browserId}
         caption="Words Sources"
         url="data/words-source-menu.json"
         onClickItem={onClickItem}
      />
    );
  }
}

export default withTheme(MenuBrowser)
