import React from 'react';
import {render} from 'react-dom';
import App from './containers/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import planet from './reducers/index';

var store = createStore(planet);
const title = 'My Minimal React Webpack Babel Setup done asdf';

render(
<Provider store={store}>
  <App />
</Provider>,
  document.getElementById('app')
);

module.hot.accept();