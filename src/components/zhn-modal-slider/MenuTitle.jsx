import React, { Component } from 'react'

import MenuAriaItem from './MenuAriaItem'

const S = {
  ITEM: {
    position: 'relative'
  },
  PREV_PAGE: {
    position: 'absolute',
    top: 0,
    left: 16
  },
  TITLE: {
    paddingLeft: 16
  }
};

class MenuTitle extends Component {
  /*
  static propTypes = {
    baseTitleCl: PropTypes.string,
    title: PropTypes.string,
    pageNumber: PropTypes.number,
    onPrevPage: PropTypes.func,
    onReg: PropTypes.func
  }
  */

  render(){
    const {
            baseTitleCl,
            title, pageNumber,
            onPrevPage, onReg
          } = this.props;
    if (!title) { return null; }
    return (
      <MenuAriaItem
        className={baseTitleCl}
        style={S.ITEM}
        onClick={onPrevPage.bind(null, pageNumber)}
        onReg={onReg}
      >
        <span style={S.PREV_PAGE}>
          {'<'}
        </span>
        <span style={S.TITLE}>
          {title}
        </span>
      </MenuAriaItem>
    );
  }
}

export default MenuTitle
