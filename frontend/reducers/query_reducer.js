import { RECEIVE_QUERY, REMOVE_QUERY } from '../actions/event_actions';

const defaultState = {
  name: '',
}

const QueryReducer = (state = defaultState, action) => {
  switch (action.type){
    case RECEIVE_QUERY:
      return action.query;
    case REMOVE_QUERY:
      return defaultState;
    default:
      return state;
  }
};

export default QueryReducer;
