import { fOnKeyEnter } from './hooks/fUseKey';

export const crMenuItemRole = (
  onClick,
  tabIndex,
  isKeyUp
) => ({
  role: "menuitem",
  tabIndex,
  onClick,
  [isKeyUp ? "onKeyUp" : "onKeyDown"]: onClick
    ? fOnKeyEnter(onClick)
    : void 0
})
