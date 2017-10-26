import { RECEIVE_EVENT_ERRORS, CLEAR_ERRORS } from '../actions/event_actions';
import merge from 'lodash/merge';


const EventErrorsReducer = (state = [], action) => {
  debugger
  switch(action.type){
    case RECEIVE_EVENT_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};


export default EventErrorsReducer;
