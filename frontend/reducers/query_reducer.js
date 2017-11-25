import { RECEIVE_QUERY, REMOVE_QUERY } from '../actions/event_actions';

const QueryReducer = (state = null, action) => {
  switch (action.type){
    case RECEIVE_QUERY:
      return action.query;
    case REMOVE_QUERY:
      return null;
    default:
      return state;
  }
};

export default QueryReducer;
