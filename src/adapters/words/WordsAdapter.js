import domSanitize from '../../utils/domSanitize';

const _assign = Object.assign
, EMPTY = '';

const _crConfig = (json) => {
  const {
    word,
    frequency=EMPTY,
    pronunciation
  } = json || {}
  , {
    all=EMPTY
  } = pronunciation || {}
  , _pron = all
      ? `[${domSanitize(all)}]`
      : EMPTY
  , _caption = domSanitize(word);

  return _assign(json || {}, {
    caption: _caption,
    id: _caption || 'id',
    title: `${_caption}: ${domSanitize(frequency)} ${_pron}`
  });
}

const WordsAdapter = {
  toConfig(json, option){
    return _crConfig(json);
  }
}

export default WordsAdapter
