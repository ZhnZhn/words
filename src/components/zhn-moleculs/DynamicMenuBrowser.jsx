import { Component } from 'react'

import A from '../zhn-atoms/Atoms'
import MenuPart from './MenuPart'

const S = {
  BROWSER: {
    paddingRight: 0
  },
  SCROLL_PANE: {
    overflowY: 'auto',
    height: '92%',
    paddingRight: 10,

  },
  SPINNER_LOADING: {
    position: 'relative',
    display: 'block',
    width: 32,
    height: 32,
    margin: '0 auto',
    marginTop: 32,
    textAlign: 'middle'
  },
  ROOT_MENU: {
    paddingLeft: 4
  }
}

class DynamicMenuBrowser extends Component {

  static defaultProps = {
    onError: ()=>{}
  }

  state = {
    isShow: true,
    isLoading: true,
    isLoadingFailed: false,
    menuModel: {}
  }

  componentDidMount(){
    const { store={} } = this.props;
    if (typeof store.listen === 'function'){
      this.unsubscribe = store.listen(this._onStore)
    }
    this._loadMenu()
  }
  componetWillUnmaount(){
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  }


  _onStore = (actionType, id) => {
    const { showAction, browserId } = this.props;
    if (actionType === showAction && id === browserId ){
       this.setState({ isShow: true })
    }
  }


  _loadMenu = () => {
    const { url, onError } = this.props;
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
         this.setState({ isLoading: false, menuModel: json })
      })
      .catch(err => {
          this.setState({ isLoadingFailed: true, isLoading: false })
          onError(err)
      })
  }

  _handleHide = () => {
    this.setState({ isShow: false })
  }

  _renderMenuParts({ styleConfig, menuModel, restProps }){
    const { menu=[], items={} } = menuModel;
    return menu.map((menuPart, index) => {
      return (
        <MenuPart
          {...menuPart}
          key={index}
          hmItems={items}
          styleConfig={styleConfig}
          {...restProps}
        />
      );
    })
  }

  render(){
    const { styleConfig:TS={},
            caption,
            children, ...restProps } = this.props
        , { isShow, isLoading, isLoadingFailed, menuModel } = this.state;
    return (
      <A.Browser
         isShow={isShow}
         style={{...S.BROWSER, ...TS.BROWSER}}
       >
        <A.BrowserCaption
          rootStyle={TS.BROWSER_CAPTION}
          caption={caption}
          onClose={this._handleHide}
        />
        {
          isLoading &&
          <A.SpinnerLoading
               style={S.SPINNER_LOADING}
          />
        }
        {
          isLoadingFailed &&
          <A.SpinnerLoading
             style={S.SPINNER_LOADING}
             isFailed={true}
           />
         }
        <A.ScrollPane
           className={TS.CL_SCROLL_PANE}
           style={S.SCROLL_PANE}
        >
          {this._renderMenuParts({ styleConfig: TS, menuModel, restProps})}
          {children}
        </A.ScrollPane>
      </A.Browser>
    );
  }
}

export default DynamicMenuBrowser
