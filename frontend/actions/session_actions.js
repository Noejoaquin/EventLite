import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = (currentUser) => (dispatch) => {
  return APIUtil.login(currentUser)
                 .then((user) => dispatch(receiveCurrentUser(user)),
                  (errors) => dispatch(receiveErrors(errors.responseJSON))
                );
};


export const logout = () => (dispatch) => {
  return APIUtil.logoutUser()
  .then( () => dispatch(receiveCurrentUser(null)),
  (errors) => dispatch(receiveErrors(errors.responseJSON)));
};


export const signUp = (user) => (dispatch) => {
  return APIUtil.signUp(user)
                .then( (user) => dispatch(receiveCurrentUser(user)),
                      (errors) => dispatch(receiveErrors(errors.responseJSON))
                    );
};
