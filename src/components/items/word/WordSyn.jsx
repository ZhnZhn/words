import React, { Fragment } from 'react'

import A from '../../zhn-atoms/Atoms'

const S = {
  DER_ROOT: {
    display: 'inline-block'
  },
  DER_CAPTION: {
    color: '#0c7abf',
    paddingRight: '8px',
    fontWeight: 'bold'
  },
  SYN_CAPTION: {
    color: 'green',
    paddingRight: '8px',
    fontWeight: 'bold'
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
    <Fragment>
      <A.ListSpan
        caption="derivation:"
        rootStyle={S.DER_ROOT}
        captionStyle={S.DER_CAPTION}
        items={derivation}
      />
      <A.ListDiv
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
    </Fragment>
  );
}

export default WordSyn
