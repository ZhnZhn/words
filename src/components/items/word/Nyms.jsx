import React from 'react'

import A from '../../zhn-atoms/Atoms'

const S = {
  CAPTION: {
    color: '#0c7abf',
    paddingRight: '8px',
    fontWeight: 'bold'
  }
};

const Nyms = ({ caption, items }) => {
  if ( !(items && items.length !== 0) ){
    return null;
  }

  return (
    <A.ListSpan
      caption={caption}
      captionStyle={S.CAPTION}
      items={items}
    />
  );
}

export default Nyms
