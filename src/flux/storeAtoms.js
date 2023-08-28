import { atom } from './storeApi';
import initialUiTheme  from '../components/styles/theme';

const _atomUiTheme = atom(initialUiTheme);

export const useUiTheme = _atomUiTheme.useAtomValue
export const setUiTheme = (themeName) => {
  _atomUiTheme.setValue(prev => prev.getThemeName() === themeName
     ? prev
     : (prev.setThemeName(themeName), {...prev})
  )
}
