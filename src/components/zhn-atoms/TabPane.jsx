import React, { Component } from 'react';
//import PropTypes from "prop-types";

const CL_UL = "tabpane__tabs";

const S = {
  UL: {
    listStyle : 'outside none none',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 5,
    borderBottom : '2px solid #80c040'
  },
  DIV: {
    width: "100%",
    height : "100%"
  },
  BLOCK: {
    display: 'block',
    width: "100%",
    height : "100%"
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
        , _divStyle = _isSelected ? S.BLOCK : S.NONE
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
    const { width, height } = this.props;
    return (
      <div style={{ width, height }}>
        <ul className={CL_UL} style={S.UL}>
           {this._renderTabs()}
        </ul>
        <div style={S.DIV}>
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
