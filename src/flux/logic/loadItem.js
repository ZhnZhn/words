import fnFetch from '../../utils/fn'

const _fnCatch = ({ error, onFailed }) => {
  onFailed(error)
};

const _fFetch = (adapter) => function({ json, option, onCompleted }){
  const config = adapter.toConfig(json, option);
  const itemConf = option.itemConf;
  onCompleted({ config, itemConf }, option)
};

const loadItem = function(option, onCompleted, onFailed){
  const { api, adapter } = option
      , { getRequestUrl, crOptions, checkResponse } = api
      , fetchOptions = (typeof crOptions === 'function')
          ? crOptions(option)
          : undefined;
  fnFetch({
    uri: getRequestUrl(option),
    option: option,
    fetchOptions: fetchOptions,
    onCheckResponse: checkResponse,
    onFetch: _fFetch(adapter),
    onCompleted: onCompleted,
    onCatch: _fnCatch,
    onFailed: onFailed
  })
};

export default loadItem
