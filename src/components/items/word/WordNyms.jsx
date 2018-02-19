import React from 'react'

import A from '../../zhn-atoms/Atoms'
import Nyms from './Nyms'

const S = {
  FILL_OPEN: "#80c040",

  OC_CAPTION: {
    color: 'black'
  },
  OC_CHILDREN: {
    paddingLeft: '16px',
    paddingRight: '16px'
  }
};

const WordNyms = ({ result }) => {
  const {
          typeOf,
          hasTypes,
          partOf,
          hasParts
        } = result;
  if ( !typeOf && !hasTypes && !partOf && !hasParts ) {
    return null;
  }
  return (
    <A.OpenClose
      isClose={true}
      caption="Nyms"
      fillOpen={S.FILL_OPEN}
      captionStyle={S.OC_CAPTION}
      childrenStyle={S.OC_CHILDREN}
    >
      <Nyms
        caption="hypernyms (more generic):"
        items={typeOf}
      />
      <Nyms
        caption="hyponyms (more specific):"
        items={hasTypes}
      />
      <Nyms
        caption="holonyms (partOf):"
        items={partOf}
      />
      <Nyms
        caption="meronyms (hasParts):"
        items={hasParts}
      />
    </A.OpenClose>
  );
};

export default WordNyms
