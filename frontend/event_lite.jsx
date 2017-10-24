import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root'
import { signUp, login, logoutUser } from './util/session_api_util';
import configureStore from './store/store';




document.addEventListener("DOMContentLoaded", () => {
  window.signUp = signUp;
  window.login = login;
  window.logoutUser = logoutUser;
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDom.render(<Root />, root)
})
