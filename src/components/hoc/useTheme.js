import {
  useContext,
  useStore
} from '../uiApi';

import { selectUiTheme } from '../../flux/uiThemeStore';
import ThemeContext from './ThemeContext';

const useTheme = (
  styleConfig
) => {
  const uiThemeStore = useContext(ThemeContext)
  , uiTheme = useStore(uiThemeStore, selectUiTheme);
  return uiTheme.createStyle(styleConfig);
};

export default useTheme
