//const LIMIT_REMAINING = 'X-RateLimit-Remaining';

/*
const _fnMsg400 = (option) => {
  if (option.loadId === "EU_STAT"){
    return '400 : Bad request.\nDataset contains no data. One or more filtering elements (query parameters) are probably invalid.\nMaybe try request with older date.';
  } else {
    return '400 : Bad request';
  }
}
*/
const LIMIT_REMAINING = 'X-RateLimit-requests-Remaining';

const FREQUENCY_RESTRICTION = 5000;
const MSG_FREQUENCY_RESTRICTION = 'Request frequency restriction.\nOne request per 5 second.\n Remain'
//const MSG_LOAD_RESTRICTION = 'Request has already loaded.\n1 Request per 5 second.';
let _lastUri;
let _msLastFetch;

const _crMsgFrequency = (msDiff) => {
  const _s = (msDiff/1000).toFixed(1);
  return `${MSG_FREQUENCY_RESTRICTION} ${_s} seconds`;
}

const _isFn = fn => typeof fn === 'function';

const fnFetch = function({
   uri, option, fetchOptions,
   onCheckResponse, onFetch, onCompleted, onFailed, onCatch
 }){
  const _msNow = Date.now()
      , _msDiff =_msNow - _msLastFetch ;
  if ( _msDiff < FREQUENCY_RESTRICTION ) {
    if ( _lastUri !== uri ) {
      onFailed({ msg: _crMsgFrequency(_msDiff) })
    } else {
      onFailed({ msg: _crMsgFrequency(_msDiff) })
      //onFailed({ msg: MSG_LOAD_RESTRICTION })
      //onCompleted({ json: {}, option })
    }
  } else {
    _lastUri = uri;
    _msLastFetch = _msNow;
    fetch(uri, fetchOptions)
      .then((response) => {
        const { status, statusText, headers={}, ok } = response;
        if ((status>=200 && status<400) || ok) {
          if (_isFn(headers.get)){
            return Promise.all([
               Promise.resolve(headers.get(LIMIT_REMAINING)),
               response.json()
            ]);
          } else {
            return Promise.all([
               Promise.resolve(undefined),
               response.json()
            ]);
          }
       } else if (status === 404) {
          throw {
            msg: `Not Found ${status}`
          };
       } else if (status>=500 && status<600){
          throw {
            msg : `Response Error ${status} : ${statusText}`
          };
       }
      })
      .then(([limitRemaining, json ]) => {
         if (onCheckResponse(json, option)){
           option.limitRemaining = limitRemaining;
           onFetch({ json, option, onCompleted });
         }
      })
      .catch((error) => {
         onCatch({ error, option, onFailed })
      })
   }
}

export default fnFetch
