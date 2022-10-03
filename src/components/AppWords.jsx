import {
  useState,
  useEffect
} from './uiApi';

import useListen from './hooks/useListen';

import ThemeContext from './hoc/ThemeContext';
import initialUiTheme  from './styles/theme';

import {
  CAT_SHOW_BROWSER,
  CAT_SHOW_DIALOG,
  CAT_SHOW_MODAL_DIALOG,
  CAT_SHOW_PANE,
  CAT_UPDATE_WATCH_BROWSER
} from '../flux/actions/ComponentActions';

import HeaderBar from './header/HeaderBar';
import Container from './zhn-containers/Container';

const CL_COMP = "component-container"
, CL_ITEMS = "items-container"
, WORDS_BROWSER_ID = 'WORDS_DIFINITION';

const AppWords = ({
  store,
  action,
  LPT
}) => {
  const [
    uiTheme,
    setUiTheme
  ] = useState(initialUiTheme);

  useListen(store, (actionType, uiThemeName) => {
    if (actionType === "changeTheme"){
      setUiTheme(prevUiTheme => {
        prevUiTheme.setThemeName(uiThemeName)
        return {...prevUiTheme};
      })
    }
  })

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    action.showAbout()
  }, [])
  // action
  /*eslint-enable react-hooks/exhaustive-deps */

  const {
    headerActions,
    browserActions
  } = action;

  return (
    <ThemeContext.Provider value={uiTheme}>
      <div>
        <HeaderBar
          store={store}
          LPT={LPT}
          {...headerActions}
        />
        <div className={CL_COMP}>
           <Container.Browser
             store={store}
             showBrowserAction={CAT_SHOW_BROWSER}
             showDialogAction={CAT_SHOW_DIALOG}
             browserId={WORDS_BROWSER_ID}
             updateWatchAction={CAT_UPDATE_WATCH_BROWSER}
             {...browserActions}
           />
           <Container.Hrz
             className={CL_ITEMS}
             store={store}
             addAction={CAT_SHOW_PANE}
           />
        </div>
        <Container.Wrapper
           store={store}
           SHOW_ACTION={CAT_SHOW_MODAL_DIALOG}
        />
      </div>
    </ThemeContext.Provider>
  );
};

export default AppWords
