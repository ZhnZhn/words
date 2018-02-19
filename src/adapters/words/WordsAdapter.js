
const EMPTY = '';

const _crConfig = (json) => {
  const {
          word,
          frequency=EMPTY, pronunciation={}
        } = json
      , { all=EMPTY } = pronunciation
      , _pron = all
          ? `[${all}]`
          : EMPTY

  return Object.assign(json, {
    caption: word,
    id: word || 'id',
    title: `${word}: ${frequency} ${_pron}`
  });

}

const WordsAdapter = {
  toConfig(json={}, option){    
    return _crConfig(json);
  }
}

export default WordsAdapter
