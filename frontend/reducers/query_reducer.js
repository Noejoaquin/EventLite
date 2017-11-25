import { RECEIVE_QUERY, REMOVE_QUERY } from '../actions/event_actions';

const QueryReducer = (state = [], action) => {
  switch (action.type){
    case RECEIVE_QUERY:
      return action.query;
    case REMOVE_QUERY:
      return [];
    default:
      return state;
  }
};

export default QueryReducer;
