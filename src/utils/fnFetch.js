const LIMIT_REMAINING = 'X-RateLimit-requests-Remaining';
const FREQUENCY_RESTRICTION = 5000;
const MSG_FREQUENCY_RESTRICTION = 'Request frequency restriction.\nOne request per 5 second.\n Remain'

let _lastUri;
let _msLastFetch;

const _isFn = fn => typeof fn === 'function';
const _promiseResolve = Promise.resolve.bind(Promise);

const _crMsgFrequency = (msDiff) => {
  const _s = (msDiff/1000).toFixed(1);
  return `${MSG_FREQUENCY_RESTRICTION} ${_s} seconds`;
};

const _crErrMsg = (msg) => ({ msg });

const fnFetch = ({
   uri,
   option,
   fetchOptions,
   onCheckResponse,
   onFetch,
   onCompleted,
   onFailed,
   onCatch
 }) => {
  const _msNow = Date.now()
  , _msDiff =_msNow - _msLastFetch;

  if (_msDiff < FREQUENCY_RESTRICTION) {
    if (_lastUri !== uri) {
      onFailed(
        _crErrMsg(_crMsgFrequency(_msDiff))
      )
    }
  } else {
    _lastUri = uri;
    _msLastFetch = _msNow;
    fetch(uri, fetchOptions)
      .then(res => {
        const {
          status,
          statusText,
          headers={}
        } = res;
        return Promise.all([
          _promiseResolve(status),
          _promiseResolve(statusText),
          _isFn(headers.get)
             ? _promiseResolve(headers.get(LIMIT_REMAINING))
             : _promiseResolve(void 0),
          _isFn(res.json)
             ? res.json()
             : _promiseResolve(void 0),
        ]);
      })
      .then(([
        status,
        statusText,
        limitRemaining,
        json
      ]) => {
         if (status >= 200 && status < 400) {
           if (onCheckResponse(json, option)){
             option.limitRemaining = limitRemaining;
             onFetch({
               json,
               option,
               onCompleted
             });
           }
         } else {
             throw _crErrMsg(
               status === 404
                 ? `${status}: Not Found`
                 : `${status}: ${statusText}. ${json.message || ''}`
             );
         }
      })
      .catch((error) => {
         onCatch({
           error,
           option,
           onFailed
         })
      })
   }
}

export default fnFetch
