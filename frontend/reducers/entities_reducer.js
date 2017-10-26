import { combineReducers } from 'redux';
import EventsReducer from './events_reducer';


const EntitiesReducer = combineReducers({
  events: EventsReducer,
})


export default EntitiesReducer;
