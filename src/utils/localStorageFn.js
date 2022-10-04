const LS = window.localStorage;

export const hasLocalStorage = !!(LS)

const _getTryCatchValue = (
  getValue,
  dfValue
) => {
  try {
    return getValue() || dfValue;
  } catch(err) {
    return dfValue;
  }
};

export const readObj = (
  storageKey,
  dfValue
) => _getTryCatchValue(
  () => JSON.parse(LS[storageKey]),
  dfValue
);

export const writeObj = (
  storageKey,
  valueObj
) => {
  try {
    LS[storageKey] = JSON.stringify(valueObj)
  } catch(err) {
    return err;
  }
};
