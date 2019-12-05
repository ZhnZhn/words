import React, { Fragment } from 'react'

import WordOf from './WordOf'

const WordNyms = ({ result }) => {
  const {
    typeOf,
    hasTypes,
    partOf,
    hasParts,
    inCategory,
    hasCategories
  } = result || {};
  return (
    <Fragment>
      <WordOf
        caption="typeOf (hypernyms: more generic)"
        items={typeOf}
      />
      <WordOf
        caption="hasTypes (hyponyms: more specific)"
        items={hasTypes}
      />
      <WordOf
        caption="partOf (holonyms)"
        items={partOf}
      />
      <WordOf
        caption="hasParts (meronyms)"
        items={hasParts}
      />
      <WordOf
        caption="inCategory"
        items={inCategory}
        isCount={true}
      />
      <WordOf
        caption="hasCategory"
        items={hasCategories}
        isCount={true}
      />
    </Fragment>
  );
};

export default WordNyms
