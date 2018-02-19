const C = {
  URL: 'https://wordsapiv1.p.mashape.com/words'
};

const WordsApi = {
  crOptions(option){
    const { apiKey } = option;
    return {
      headers: {
        'X-Mashape-Key': apiKey
      }
    };
  },
  getRequestUrl(option){
    const { word='example', itemConf={} } = option
        , { loadType } = itemConf    
    if (loadType === 'R') {
      return `${C.URL}/?random=true`;
    }
    return `${C.URL}/${word}`;
  },
  checkResponse(){
    return true;
  }
}

export default WordsApi
