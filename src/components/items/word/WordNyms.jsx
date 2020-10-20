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
    <>
      <WordOf
        //hypernyms
        caption="typeOf (more generic)"
        items={typeOf}
      />
      <WordOf
        //hyponyms
        caption="hasTypes (more specific)"
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
    </>
  );
};

export default WordNyms
