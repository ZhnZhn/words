import A from '../../Comp';

const S_DERIVATION_ROOT = {
  display: 'inline-block'
}
, S_DERIVATION_CAPTION = {
  color: '#0c7abf',
  paddingRight: 8,
  fontWeight: 800
}
, S_SYNONYMS_CAPTION = {
  color: 'green',
  paddingRight: 8,
  fontWeight: 800
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
        rootStyle={S_DERIVATION_ROOT}
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
