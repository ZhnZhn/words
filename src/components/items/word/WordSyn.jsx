import A from '../../Comp';

const _S_CAPTION = {
  paddingRight: 8,
  fontWeight: 800
}
, S_DERIVATION_CAPTION = {
  ..._S_CAPTION,
  color: '#0c7abf',
}
, S_SYNONYMS_CAPTION = {
  ..._S_CAPTION,
  color: 'green'
}
, S_ITEM = {
  fontWeight: 400
};

const WordSyn = ({
  style,
  result
}) => {
  const {
    derivation,
    examples,
    synonyms,
    similarTo
  } = result || {};
  return (
    <div style={style}>
      <A.ListSpan
        caption="derivation:"
        captionStyle={S_DERIVATION_CAPTION}
        items={derivation}
      />
      <A.ListDiv
        itemStyle={S_ITEM}
        items={examples}
      />
      <A.ListSpan
        caption="synonyms:"
        captionStyle={S_SYNONYMS_CAPTION}
        items={synonyms}
      />
      <A.ListSpan
        caption="similarTo:"
        captionStyle={S_SYNONYMS_CAPTION}
        items={similarTo}
      />
    </div>
  );
};

export default WordSyn
