import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/globals';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './components/App';

const renderApp = () => {
  const store = configureStore({});

  if (process.env.NODE_ENV !== 'production') {
    console.log('Initial state ->');
    console.log(store.getState());
  }

  ReactDOM.render(
    <Provider store={store}>
      <div>
        <GlobalStyles />
        <App />
      </div>
    </Provider>,
    document.getElementById('root')
  );
};

renderApp();
