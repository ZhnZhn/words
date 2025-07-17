import { useRef } from '../uiApi';

import { useAsyncFocusFirstItemIf } from '../hooks/useFocus';

const useFocusTrap = (props) => {
  const _refFirstItem = useRef()
  , _refLastItem = useRef()
  , _getRefItem = index => index === 0 && !props.title
    ? _refFirstItem
    : index === props.items.length - 1
    ? _refLastItem
    : void 0;

    useAsyncFocusFirstItemIf(
      props.isVisible,
      _refFirstItem
    )

    return [
      _refFirstItem,
      _refLastItem,
      _getRefItem
    ];
};

export default useFocusTrap
