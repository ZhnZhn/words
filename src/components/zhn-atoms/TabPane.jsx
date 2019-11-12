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
    isUpdateInit: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.node)
  }
  */


  constructor(props){
    super(props);

    this.isUpdateInit = props.isUpdateInit

    const components = props.children.map((tab, index) => {
       return  React.cloneElement(tab.props.children, { key : 'comp' + index });
    })
    this.state = {
      selectedTabIndex : 0,
      components
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    if (this.isUpdateInit && this.props !== nextProps){
      const components = nextProps.children.map((tab, index) => {
         return  React.cloneElement(tab.props.children, { key : 'comp' + index });
      })
      this.setState({ components })
    }
  }

  _handleClickTab = (index) => {
    this.setState({selectedTabIndex : index});
  }

  _renderTabs = (children) => {
       const {selectedTabIndex} = this.state;
       return children.map((tab, index) => {
          const isSelected = (index === selectedTabIndex)
             ? true : false;
          return React.cloneElement(tab, {
            key: index,
            onClick: this._handleClickTab.bind(null, index),
            isSelected
          })
       })
  }

  _renderComponents = () => {
      const {selectedTabIndex, components} = this.state;
      return components.map((comp, index) => {
         const divStyle = (index === selectedTabIndex)
                    ? S.BLOCK
                    : S.NONE;
          return (
             <div style={divStyle} key={'a'+index}>
                {comp}
             </div>
           )
      })
  }

  render(){
    const { children, width, height } = this.props;

    return (
      <div style={{ width, height }}>
        <ul className={CL_UL} style={S.UL}>
           {this._renderTabs(children)}
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
