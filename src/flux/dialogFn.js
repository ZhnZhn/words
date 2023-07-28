import { crDialog } from './logic/Factory';

export const crDialogOption = (
  slice,
  itemConf
) => {
  const { type } = itemConf;
  if (slice[type]) {
    return { key: type };
  } else {
    const Comp = crDialog(itemConf);
    slice[type] = true
    return { key: type, Comp };
  }
}
