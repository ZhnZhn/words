import { createRoot } from 'react-dom/client';

import store from './flux/stores/Store';
import action from './flux/actions/AppActions';

import App  from './components/AppWords';

createRoot(document.getElementById('app'))
  .render((
    <App
      store={store}
      action={action}
    />
  ))
