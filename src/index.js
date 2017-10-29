import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import style from './containers/App.css';
import uuid from 'uuid';
import { AppContainer } from 'react-hot-loader';

ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}