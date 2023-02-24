import fnFetch from '../../utils/fnFetch';

const _fnCatch = ({
  error,
  onFailed
}) => {
  onFailed(error)
};

const _fFetch = (
  adapter
) => ({
  json,
  option,
  onCompleted
}) => {
  const config = adapter.toConfig(json, option)
  , itemConf = option.itemConf;
  onCompleted({ config, itemConf }, option)
};

const loadItem = (
  option,
  onCompleted,
  onFailed
) => {
  const {
    api,
    adapter
  } = option
  , {
    getRequestUrl,
    crOptions,
    checkResponse
  } = api
  , fetchOptions = typeof crOptions === 'function'
      ? crOptions(option)
      : void 0;
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
