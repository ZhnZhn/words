import { fOnKeyEnterEvt } from './hooks/fUseKey';

export const crMenuItemRole = (
  onClick,
  tabIndex,
  isKeyUp
) => ({
  role: "menuitem",
  tabIndex,
  onClick,
  [isKeyUp ? "onKeyUp" : "onKeyDown"]: onClick
    ? fOnKeyEnterEvt(onClick)
    : void 0
})
