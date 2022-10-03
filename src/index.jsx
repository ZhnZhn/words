import { render } from 'react-dom';

import store from './flux/stores/Store';
import action from './flux/actions/AppActions';

import App  from './components/AppWords';

render(
  <App store={store} action={action} />,
  document.getElementById('app')
)
