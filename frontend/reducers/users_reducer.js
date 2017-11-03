import { RECEIVE_USERS } from '../actions/user_actions';


const UsersReducer = ( state = {}, action ) => {
  switch(action.type){
    case RECEIVE_USERS:
      return action.users
    default:
      return state
  }
}


export default UsersReducer;
