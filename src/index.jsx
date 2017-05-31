import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes.jsx';
import '../public/sass/all.scss';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);


document.addEventListener('DOMContentLoaded', () => {
  render((
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
    ),
    document.getElementById('root'),
  );
});
