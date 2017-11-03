import { combineReducers } from 'redux';
import EventsReducer from './events_reducer';
import CategoriesReducer from './categories_reducer';
import UsersReducer from './users_reducer';

const EntitiesReducer = combineReducers({
  events: EventsReducer,
  categories: CategoriesReducer,
  users: UsersReducer
})


export default EntitiesReducer;
