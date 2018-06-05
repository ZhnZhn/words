import React from 'react'

import A from '../../zhn-atoms/Atoms'

const S = {
  ROOT: {
    lineHeight: 1.7
  },
  DER_ROOT: {
    display: 'inline-block'
  },
  DER_CAPTION: {
    color: '#0c7abf',
    paddingRight: '8px',
    fontWeight: 800
  },
  SYN_CAPTION: {
    color: 'green',
    paddingRight: '8px',
    fontWeight: 800
  },
  ITEM: {
    fontWeight: 400
  }
};

const WordSyn = ({ result }) => {
  const {
          derivation,
          examples,
          synonyms,
          similarTo
        } = result;
  return (
    <div style={S.ROOT}>
      <A.ListSpan
        caption="derivation:"
        rootStyle={S.DER_ROOT}
        captionStyle={S.DER_CAPTION}
        items={derivation}
      />
      <A.ListDiv
        itemStyle={S.ITEM}
        items={examples}
      />
      <A.ListSpan
        caption="synonyms:"
        captionStyle={S.SYN_CAPTION}
        items={synonyms}
      />
      <A.ListSpan
        caption="similarTo:"
        captionStyle={S.SYN_CAPTION}
        items={similarTo}
      />
    </div>
  );
}

export default WordSyn
