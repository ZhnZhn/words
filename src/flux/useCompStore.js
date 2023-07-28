import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

export const selectMdOption = state => state.mdOption;

export const useCompStore = create(
  subscribeWithSelector((set) => ({
    mdOption: void 0,
    showMd: (mdType, option) => set(() => ({
      mdOption: {
        ...option,
        modalDialogType: mdType
      }
    }))
  }))
);

export const showMd = useCompStore.getState().showMd
