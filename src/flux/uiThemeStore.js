import { createStore } from './storeApi';
import initialUiTheme  from '../components/styles/theme';

export const selectUiTheme = state => state.uiTheme;

const _crUiThemeSlice = (uiTheme) => ({
  uiTheme
});

export const uiThemeStore = createStore(set => ({
  uiTheme: initialUiTheme,
  setUiTheme: (uiThemeItem) => set(state => {
    const _uiTheme = selectUiTheme(state);
    if (_uiTheme.getThemeName() === uiThemeItem.value) {
      return _crUiThemeSlice(_uiTheme);
    }
    _uiTheme.setThemeName(uiThemeItem.value)
    return _crUiThemeSlice({..._uiTheme});
  })
}))

export const setUiTheme = uiThemeStore.getState().setUiTheme
