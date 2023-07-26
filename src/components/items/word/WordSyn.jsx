import ListSpan from '../../zhn-atoms/ListSpan';
import ListDiv from '../../zhn-atoms/ListDiv';

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
      <ListSpan
        caption="derivation:"
        captionStyle={S_DERIVATION_CAPTION}
        items={derivation}
      />
      <ListDiv
        itemStyle={S_ITEM}
        items={examples}
      />
      <ListSpan
        caption="synonyms:"
        captionStyle={S_SYNONYMS_CAPTION}
        items={synonyms}
      />
      <ListSpan
        caption="similarTo:"
        captionStyle={S_SYNONYMS_CAPTION}
        items={similarTo}
      />
    </div>
  );
};

export default WordSyn
