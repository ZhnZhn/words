import { render } from 'react-dom'

import store from './flux/stores/Store'
import action from './flux/actions/AppActions'

import { T as LPT } from './flux/actions/LoadingActions'

import App  from './components/AppWords'

const appProps = {
  store,
  action,
  LPT
};

render(
  <App {...appProps} />,
  document.getElementById('app')
)
