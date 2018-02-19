import React from 'react';
//import PropTypes from "prop-types";

const S = {
  LI : {
    float : 'left',
    display : 'inline-block',
    backgroundColor : '#1b2836',
    color : 'gray',
    paddingLeft : '10px',
    paddingRight : '10px',
    paddingTop : '6px',
    paddingBottom : '6px',
    borderTopLeftRadius : '8px',
    borderTopRightRadius : '8px',
    cursor : 'pointer',

    fontWeight : 'bold',
    //border: '2px solid gray',
    border: '2px solid #303030',
    borderBottom : 'none',

  },
  SELECTED : {
    //borderColor : 'rgba(164, 135, 212, 1)',
    //color : 'rgba(164, 135, 212, 1)'
    color: '#80c040',
    borderColor: '#80c040'
  }
}


const Tab = ({ title, style, isSelected, onClick }) => {
    const _selectedStyle = (isSelected)
              ? S.SELECTED
              : null;    
    return (
       <li
          style={{ ...S.LI, ...style, ..._selectedStyle }}
          onClick={onClick}
       >
          <span>{title}</span>
       </li>
    )
}

/*
Tab.propTypes = {
  title: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
}
*/

export default Tab
