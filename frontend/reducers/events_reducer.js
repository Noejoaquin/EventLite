import {RECEIVE_EVENTS, RECEIVE_EVENT, REMOVE_EVENT} from '../actions/event_actions';
import merge from 'lodash/merge';


const EventsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_EVENTS:
      return action.events;
    case RECEIVE_EVENT:
      return merge({}, state, { [action.event.id]: action.event} );
    case REMOVE_EVENT:
      let newState = merge({}, state);
      delete newState[action.eventId];
      return newState;
    default:
      return state;
  }
}

export default EventsReducer;
