import { render } from './components/uiApi';
import action from './flux/actions/AppActions';
import App  from './components/AppWords';

render(
  <App action={action} />,
  document.getElementById('app')
)
