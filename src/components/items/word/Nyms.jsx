import React from 'react'

import A from '../../zhn-atoms/Atoms'

const S = {
  LIST: {
    lineHeight: 1.5
  },
  CAPTION: {
    color: '#0c7abf',
    paddingRight: '8px',
    fontWeight: 800    
  }
};

const Nyms = ({ caption, items }) => {
  if ( !(items && items.length !== 0) ){
    return null;
  }

  return (
    <A.ListSpan
      caption={caption}
      rootStyle={S.LIST}
      captionStyle={S.CAPTION}
      items={items}
    />
  );
}

export default Nyms
