import { signup, signin, logout } from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
})

export const loginUser = userParam => dispatch =>  signin(userParam)
  .then(user => dispatch(receiveCurrentUser(user)),
  err => (
    dispatch(receiveErrors(err.responseJSON))
  ));

export const signupUser = userParam => dispatch => signup(userParam)
  .then(user => dispatch(receiveCurrentUser(user)),
  err => (
    dispatch(receiveErrors(err.responseJSON))
  ));

export const logoutUser = () => dispatch => logout()
  .then(() => dispatch(logoutCurrentUser()));

