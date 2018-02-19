import React, { Component } from 'react'

import ThemeProvider from './hoc/ThemeProvider'
import theme  from './styles/theme'

import HeaderBar from './header/HeaderBar'
import Container from './zhn-containers/Container'

const CL_COMP = "component-container";
const WORDS_BROWSER_ID = 'WORDS_DIFINITION';

class AppWords extends Component {

  constructor(props){
    super()
    this._changeTheme = props.CAT.CHANGE_THEME
  }

  componentDidCatch(error, info){
    console.log(error, info)
  }

  componentDidMount(){
    this.unsubscribe = this.props.store
      .listen(this._onStore)
  }
  componentWillUnmount(){
    this.unsubscribe()
  }
  _onStore = (actionType) => {
    if (actionType === this._changeTheme){
      this.forceUpdate()
    }
  }

  render(){
    const { store, action, CAT, LPT } = this.props
        , { onShowPane, ...headerAction } = action;
    return (
      <ThemeProvider theme={theme}>
        <div>
          <HeaderBar
            store={store}
            LPT={LPT}
            {...headerAction}
          />
          <div className={CL_COMP}>
             <Container.Browser
               store={store}
               showBrowserAction={CAT.SHOW_BROWSER}
               showDialogAction={CAT.SHOW_DIALOG}
               browserId={WORDS_BROWSER_ID}
               updateWatchAction={CAT.UPDATE_WATCH_BROWSER}
               onClickItem={onShowPane}
             />
             <Container.Hrz
               store={store}
               addAction={CAT.SHOW_PANE}
             />
          </div>
          <Container.Wrapper
             store={store}
             SHOW_ACTION={CAT.SHOW_MODAL_DIALOG}
          />
        </div>
      </ThemeProvider>
    );
  }
}

export default AppWords
