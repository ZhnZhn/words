import {
  joinByBlank,
  joinByColon
} from '../../utils/fnArr';

const BLANK = '';

const _crConfig = (json) => {
  const {
    word,
    frequency=BLANK,
    pronunciation
  } = json || {}
  , {
    all=BLANK
  } = pronunciation || {}
  , _pron = all
      ? `[${all}]`
      : BLANK
  , _caption = word;

  return {
    ...json,
    caption: _caption,
    id: _caption || 'id',
    title: joinByColon(_caption, joinByBlank(frequency, _pron))
  };
};

const WordsAdapter = {
  toConfig(json){
    return _crConfig(json);
  }
}

export default WordsAdapter
