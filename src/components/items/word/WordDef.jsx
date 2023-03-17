import A from '../../Comp';
import WordSyn from './WordSyn';
import WordNyms from './WordNyms';

const S_FILL_OPEN = "black"
, S_OC_CAPTION = { color: 'black' }
, S_OC_AFTER = {
  color: '#0c7abf',
  fontWeight: 800
}
, S_OC_CHILDREN = { padding: '0 16px' };

const Span = ({
  style,
  text
}) => (
  <span style={style}>
    &nbsp;{text}
  </span>
);

const DefenitionList = ({
  style,
  defItems
}) => (defItems || [])
 .map((defItem, index) => {
  const {
    definition,
    partOfSpeech,
  } = defItem || {}   
  return (
    <A.OpenClose
      key={index}
      isClose={true}
      style={style}
      caption={definition}
      fillOpen={S_FILL_OPEN}
      captionStyle={S_OC_CAPTION}
      afterCaptionComp={(
         <Span
            style={S_OC_AFTER}
            text={partOfSpeech}
          />
      )}
      childrenStyle={S_OC_CHILDREN}
    >
      <WordSyn
        result={defItem}
      />
      <WordNyms
        result={defItem}
      />
    </A.OpenClose>
  );
});

const WordDef = ({
  isShow,
  style,
  config
}) => {
  const { results } = config || {};
  return (
    <A.ShowHide
      style={style}
      isShow={isShow}
    >
      <DefenitionList
        style={style}
        defItems={results}
      />
    </A.ShowHide>
  );
};

export default WordDef
