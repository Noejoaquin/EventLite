import * as UserApiUtil from '../util/user_util';


export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
})


export const fetchUsers = () => dispatch => {
  return UserApiUtil.fetchUsers()
                    .then((users) => dispatch(receiveUsers(users)))
}
