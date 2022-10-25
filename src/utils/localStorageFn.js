const LS = window.localStorage
, KEY_PREFIX = 'W'
, _crErr = msg => ({ message: msg })
, ERR_LS_IS_ABSENT = _crErr("LocalStorage is absent")
, _crStorageKey = (
  storageKey
) => `${KEY_PREFIX}_${storageKey}`
, _hasLocalStorage = !!LS;

export const readObj = (
  storageKey
) => {
  if (_hasLocalStorage) {
    try {
      return [JSON.parse(LS[_crStorageKey(storageKey)])];
    } catch (err) {
      return [void 0, err];
    }
  } else {
    return [void 0, {...ERR_LS_IS_ABSENT}];
  }
}

export const writeObj = (
  storageKey,
  valueObj
) => {
  if (_hasLocalStorage) {
    try {
      LS[_crStorageKey(storageKey)] = JSON.stringify(valueObj)
    } catch(err) {
      return err;
    }
  } else {
    return {...ERR_LS_IS_ABSENT};
  }
};
