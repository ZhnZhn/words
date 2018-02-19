
import React, { Fragment } from 'react'

const ListDiv = ({ items=[], itemStyle }) => {
  return (
    <Fragment>
      {
        items.map((str, index) => {
          return (
            <div key={index} style={itemStyle}>
               {str}
            </div>
          );
        })
      }
    </Fragment>  
  )
};

export default ListDiv
