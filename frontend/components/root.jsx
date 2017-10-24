import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';

// </Provider>
// <Provider store={store}>
const Root = ({store}) => (
    <HashRouter>
      <App/>
    </HashRouter>
)

export default Root;
