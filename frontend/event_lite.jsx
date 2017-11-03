import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root'
import configureStore from './store/store';
import { login, logout, signUp } from './actions/session_actions';
import { fetchEvent, fetchEvents, createEvent, updateEvent, deleteEvent} from './actions/event_actions';
import { fetchCategories } from './actions/category_actions';
import { createAttendance, deleteAttendance } from './actions/attendance_actions'
import { createSave, deleteSave } from './actions/save_actions';
import { fetchUsers } from './actions/user_actions';
document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
//testing
window.fetchUsers = fetchUsers;
window.createSave = createSave;
window.deleteSave = deleteSave;
window.createAttendance = createAttendance;
window.deleteAttendance = deleteAttendance;
window.fetchCategories = fetchCategories;
window.fetchEvent = fetchEvent;
window.fetchEvents = fetchEvents;
window.createEvent = createEvent;
window.updateEvent = updateEvent;
window.deleteEvent = deleteEvent;
window.getState = store.getState;
window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDom.render(<Root store={store} />, root)
})

// //testing
// window.login = login;
// window.logout =logout;
// window.signUp = signUp;
// window.getState = store.getState;
// window.dispatch = store.dispatch;
