import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root'
import configureStore from './store/store';
import { login, logout, signUp } from './actions/session_actions';



document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // window.currentUser = currentUser;
  const root = document.getElementById('root');
  ReactDom.render(<Root store={store} />, root)
})

// //testing
// window.login = login;
// window.logout =logout;
// window.signUp = signUp;
// window.getState = store.getState;
// window.dispatch = store.dispatch;
