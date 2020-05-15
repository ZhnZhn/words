import React, { Component } from 'react';
//import PropTypes from "prop-types";

const S = {
  TAB_CAPTIONS: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 5
  },
  TABS: {
    width: "100%",
    height: "100%"
  },
  TAB_SELECTED: {
    display: 'block',
    width: "100%",
    height: "100%"
  },
  NONE: {
    display: 'none'
  }
};

class TabPane extends Component {
  /*
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.node)
  }
  */


  state = {
    selectedTabIndex: 0,
  }


  _handleClickTab = (index) => {
    this.setState({ selectedTabIndex: index });
  }

  _renderTabs = () => {
       const { children } = this.props
       , { selectedTabIndex } = this.state;
       return children.map((tab, index) => {
          const isSelected = (index === selectedTabIndex);
          return React.cloneElement(tab, {
            key: index,
            id: index,
            onClick: this._handleClickTab.bind(null, index),
            isSelected
          })
       })
  }

  _renderComponents = () => {
      const { children } = this.props
      , { selectedTabIndex } = this.state;
      return children.map((tab, index) => {
        const _isSelected = (index === selectedTabIndex)
        , _divStyle = _isSelected ? S.TAB_SELECTED : S.NONE;
        return (
          <div style={_divStyle} key={'a'+index}>
            {
              React.cloneElement(tab.props.children, {
                key: 'comp' + index,
                isSelected: _isSelected
              })
            }
          </div>
        );
      });
  }

  render(){
    const {
      style,
      tabStyle
    } = this.props;
    return (
      <div style={style}>
        <div  style={{...S.TAB_CAPTIONS, ...tabStyle}}>
           {this._renderTabs()}
        </div>
        <div style={S.TABS}>
           {this._renderComponents()}
        </div>
      </div>
    )
  }

  getSelectedTabIndex = () => {
    return this.state.selectedTabIndex;
  }
}

export default TabPane
