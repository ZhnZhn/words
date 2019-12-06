import React, { Component } from 'react';
//import PropTypes from 'prop-types'

import withTheme from '../hoc/withTheme'
import styleConfig from '../styles/MenuBrowserStyle'

import { ModalDialog } from '../../constants/Type';
import ComponentActions from '../../flux/actions/ComponentActions';
import WatchActions from '../../flux/actions/WatchActions';

import A from '../Comp';
import EditBar from './EditBar';
import WatchItem from './WatchItem';

import Decor from './decorators/Decorators';

const C_FILL_OPEN = '#80c040';
const CL_WATCH_ITEM = 'row__type2-topic not-selected';

const DRAG = {
  GROUP : 'GROUP',
  LIST : 'LIST',
  ITEM : 'ITEM'
};

const S = {
  BROWSER: {
    paddingRight: 0
  },
  BT_CIRCLE: {
    position: 'relative',
    top: -2,
    marginLeft: 20
  },
  SP: {
    height: '92%',
    paddingRight: 10,
    overflowY: 'auto'
  },
  SP_SHORT: {
    height: 'calc(100% - 70px)'
  },
  GROUP_DIV: {
    lineHeight : 2.5
  },
  LIST_DIV: {
    marginLeft : 8,
    paddingLeft : 12,
    borderLeft : '1px solid yellow',
    lineHeight : 2.5
  },
  ITEM_NOT_SELECTED: {
    marginRight : 10,
    borderBottom : '1px solid rgba(128, 192, 64, 0.6)',
  }
};

const T = {
  S: "Click to save to LocalStorage",
  E_V: "Click to toggle edit mode E/V"
};

const { saveWatch, removeWatchItem } = WatchActions;

@Decor.withDnDStyle
@Decor.withDnDGroup(DRAG, WatchActions)
@Decor.withDnDList(DRAG, WatchActions)
@Decor.withDnDItem(DRAG, WatchActions)
class WatchBrowser extends Component {
  /*
  static propTypes = {
    caption: PropTypes.string,
    isInitShow: PropTypes.bool,
    store: PropTypes.object,
    browserType: PropTypes.string,
    showAction: PropTypes.string,
    updateAction: PropTypes.string,
    onClickItem: PropTypes.func
  }
  */
  static defaultProps = {
    onClickItem: () => {}
  }

  constructor(props){
    super(props)

    this._handlerDragStartGroup = this._handlerDragStartGroup.bind(this)
    this._handlerDropGroup = this._handlerDropGroup.bind(this)
    this._handlerDragEnterGroup = this._handlerDragEnterGroup.bind(this)
    this._handlerDragLeaveGroup = this._handlerDragLeaveGroup.bind(this)

    this._handlerDragStartList = this._handlerDragStartList.bind(this)
    this._handlerDropList = this._handlerDropList.bind(this)
    this._handlerDragEnterList = this._handlerDragEnterList.bind(this)
    this._handlerDragLeaveList = this._handlerDragLeaveList.bind(this)

    this._handlerDragStartItem = this._handlerDragStartItem.bind(this)
    this._handlerDropItem = this._handlerDropItem.bind(this)
    this._handlerDragEnterItem = this._handlerDragEnterItem.bind(this)
    this._handlerDragLeaveItem = this._handlerDragLeaveItem.bind(this)

    this._handlerClickItem = this._handlerClickItem.bind(this)

    const { isInitShow, store } = props;
    this.state = {
      isShow: !!isInitShow,
      isModeEdit: false,
      watchList: store.getWatchList()
    }
  }

  componentDidMount(){
    this.unsubscribe = this.props.store
      .listen(this._onStore)
  }
  componentWillUnmount(){
    this.unsubscribe()
  }
  _onStore = (actionType, data) => {
     const { browserType, showAction, updateAction } = this.props;
     if (actionType === showAction && data === browserType ){
      this._handlerShow()
    } else if (actionType === updateAction) {
      this.setState({ watchList: data })
    }
  }

  _handlerHide = () => {
     this.setState({ isShow : false })
  }
  _handlerShow = () => {
     this.setState({ isShow : true })
  }

  _handlerSaveWatch() {
    saveWatch()
  }
  _handlerToggleEditMode = () => {
    this.setState({ isModeEdit : !this.state.isModeEdit })
  }

  _handlerEditGroup() {
    ComponentActions.showModalDialog(ModalDialog.EDIT_WATCH_GROUP)
  }
  _handlerEditList() {
    ComponentActions.showModalDialog(ModalDialog.EDIT_WATCH_LIST)
  }

  _renderWatchList = (watchList, TS) => {
     const { isModeEdit } = this.state;
     return watchList.groups.map((group, index) => {
       const {caption, lists} = group;
       return (
               <A.OpenClose2
                  key={index}
                  style={{ ...S.GROUP_DIV, ...TS.OPEN_CLOSE }}
                  caption={caption}
                  isClose={true}
                  isDraggable={isModeEdit}
                  option={{ caption }}
                  onDragStart={this._handlerDragStartGroup}
                  onDragEnter={this._handlerDragEnterGroup}
                  onDragOver={this._handlerDragOverGroup}
                  onDragLeave={this._handlerDragLeaveGroup}
                  onDrop={this._handlerDropGroup}
                >
                {
                  lists &&
                  this._renderLists(lists, caption, TS)
                }
              </A.OpenClose2>
              );
     });
  }

  _renderLists = (lists, groupCaption, TS) => {
    const { isModeEdit } = this.state;
    return lists.map((list, index) => {
      const {caption, items} = list;
      return (
        <A.OpenClose2
           key={index}
           fillOpen={C_FILL_OPEN}
           style={{ ...S.LIST_DIV, ...TS.OPEN_CLOSE }}
           styleNotSelected={S.ITEM_NOT_SELECTED}
           caption={caption}
           isClose={true}
           isDraggable={isModeEdit}
           option={{ groupCaption, caption }}
           onDragStart={this._handlerDragStartList}
           onDragEnter={this._handlerDragEnterList}
           onDragOver={this._handlerDragOverList}
           onDragLeave={this._handlerDragLeaveList}
           onDrop={this._handlerDropList}
        >
         {
           items &&
           this._renderItems(items, groupCaption, caption)
         }
       </A.OpenClose2>
      );
    });
  }

  _handlerClickItem(item) {
    this.props.onClickItem(item)
    //ComponentActions.showModalDialog(ModalDialog.LOAD_ITEM, item)
  }
  _handlerRemoveItem(option, event) {
    event.stopPropagation()
    removeWatchItem(option)
  }

  _renderItems = (items, groupCaption, listCaption) => {
      const {isModeEdit} = this.state;
      return items.map((item, index) => {
        const { id, caption } = item;
        return (
            <WatchItem
               key={id}
               className={CL_WATCH_ITEM}
               isModeEdit={isModeEdit}
               item={item}
               option={{ groupCaption, listCaption, caption }}
               onClick={this._handlerClickItem}
               onClose={this._handlerRemoveItem}
               onDragStart={this._handlerDragStartItem}
               onDragOver={this._handlerDragOverItem}
               onDragEnter={this._handlerDragEnterItem}
               onDragLeave={this._handlerDragLeaveItem}
               onDrop={this._handlerDropItem}
            />
        );
      });
    }

  render(){
    const { theme, caption } = this.props
        , { isShow, isModeEdit, watchList } = this.state
        , _captionEV = isModeEdit ? 'V' : 'E'
        , _spStyle = isModeEdit
             ? { ...S.SP, ...S.SP_SHORT }
             : S.SP
        , TS = theme.createStyle(styleConfig);
    return (
       <A.Browser
          isShow={isShow}
          style={{...S.BROWSER, ...TS.BROWSER}}
       >
          <A.BrowserCaption
            rootStyle={TS.BROWSER_CAPTION}
            caption={caption}
            onClose={this._handlerHide}
          >
           <A.CircleButton
             caption="S"
             title={T.S}
             style={S.BT_CIRCLE}
             onClick={this._handlerSaveWatch}
           />
           <A.CircleButton
              caption={_captionEV}
              title={T.E_V}
              style={S.BT_CIRCLE}
              onClick={this._handlerToggleEditMode}
           />
         </A.BrowserCaption>
         <EditBar
            isShow={isModeEdit}
            onClickGroup={this._handlerEditGroup}
            onClickList={this._handlerEditList}
         />
         <A.ScrollPane
           className={TS.CL_SCROLL_PANE}
           style={_spStyle}
         >
           {
             watchList &&
             this._renderWatchList(watchList, TS)
           }
         </A.ScrollPane>
      </A.Browser>
    )
  }
}

export default withTheme(WatchBrowser)
