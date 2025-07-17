import { useState } from '../uiApi';

import {
  S_BLOCK,
  S_NONE
} from '../styleFn';

import useEffectTimeout from '../hooks/useEffectTimeout';

const useCanBeHidden = (props) => {
  const [
    hasBeenHidden,
    setHasBeenHidden
  ] = useState(!1);

  useEffectTimeout(
    () => setHasBeenHidden(!0),
    500,
    [props.canBeHidden],
    props.canBeHidden
  )

  if (!props.canBeHidden) {
    setHasBeenHidden(!1)
  }

  return hasBeenHidden
    ? S_NONE
    : S_BLOCK;
};

export default useCanBeHidden
