import React, { Component } from 'react'

import ThemeContext from './hoc/ThemeContext'
import initTheme  from './styles/theme'

import HeaderBar from './header/HeaderBar'
import Container from './zhn-containers/Container'

const CL_COMP = "component-container";
const CL_ITEMS = "items-container";
const WORDS_BROWSER_ID = 'WORDS_DIFINITION';

class AppWords extends Component {

  state = {
    theme: initTheme
  }

  componentDidCatch(error, info){
    /*eslint-disable no-console*/
    console.warn(error, info)
    /*eslint-enable no-console*/
  }

  componentDidMount(){
    const { store, action } = this.props
    this.unsubscribe = store.listen(this._onStore)
    action.showAbout()
  }
  componentWillUnmount(){
    this.unsubscribe()
  }

  _onStore = (actionType, themeName) => {
    if (actionType === "changeTheme"){
      this.setState(({ theme }) => {
          theme.setThemeName(themeName)
          return {
            theme: {...theme}
          };
      })
    }
  }


  render(){
    const {
      store,
      CAT, LPT,
      action,
    } = this.props
  , {
      headerActions,
      browserActions
    } = action
  , { theme } = this.state;

    return (
      <React.StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <HeaderBar
            store={store}
            LPT={LPT}
            {...headerActions}
          />
          <div className={CL_COMP}>
             <Container.Browser
               store={store}
               showBrowserAction={CAT.SHOW_BROWSER}
               showDialogAction={CAT.SHOW_DIALOG}
               browserId={WORDS_BROWSER_ID}
               updateWatchAction={CAT.UPDATE_WATCH_BROWSER}
               {...browserActions}
             />
             <Container.Hrz
               className={CL_ITEMS}
               store={store}
               addAction={CAT.SHOW_PANE}
             />
          </div>
          <Container.Wrapper
             store={store}
             SHOW_ACTION={CAT.SHOW_MODAL_DIALOG}
          />
        </div>
      </ThemeContext.Provider>
      </React.StrictMode>
    );
  }
}

export default AppWords
