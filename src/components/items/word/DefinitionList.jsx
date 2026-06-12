import { isStrNotBlank } from '../../../utils/isTypeFn';
import { safeMap } from '../../uiApi';

import OpenClose from '../../zhn/OpenClose';
import WordSyn from './WordSyn';
import WordNyms from './WordNyms';

const S_FILL_OPEN = "black"
, S_OC_CAPTION = {
  color: 'black'
}
, S_OC_AFTER = {
  color: '#0c7abf',
  marginLeft: 6,
  fontWeight: 800
}
, S_OC_CHILDREN = {
  padding: '0 16px'
}
, S_W_SYN = {
  lineHeight: 1.7,
  marginLeft: -6
};

const DefinitionList = ({
  style,
  defItems
}) => safeMap(defItems, defItem => {
  const {
    definition,
    partOfSpeech,
  } = defItem || {};
  return (
    <OpenClose
      key={definition}
      isClose={true}
      style={style}
      caption={definition}
      fillOpen={S_FILL_OPEN}
      captionStyle={S_OC_CAPTION}
      afterCaptionComp={(
        isStrNotBlank(partOfSpeech)
          ? <span style={S_OC_AFTER}>{partOfSpeech}</span>
          : null
      )}
      childrenStyle={S_OC_CHILDREN}
    >
      <WordSyn
        style={S_W_SYN}
        result={defItem}
      />
      <WordNyms
        result={defItem}
      />
    </OpenClose>
  );
});

export default DefinitionList
