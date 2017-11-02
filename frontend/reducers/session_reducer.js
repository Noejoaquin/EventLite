import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = ({
  currentUser: null
});



const SessionReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return { currentUser };
      break;
    default:
      return state
  }
};

export default SessionReducer;
