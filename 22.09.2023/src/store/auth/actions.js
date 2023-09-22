export const name = "auth";

export const ActionTypes = {
  SET_USER_DATA: `${name}/SET_DATA`,
  SET_AUTH_CHECKING: `${name}/SET_AUTH_CHECKING`,
  SET_REGISTER_SENDING: `${name}/SET_REGESTER_SENDING`,
  SET_REGISTER_SEND_ERROR: `${name}/SET_REGESTER_SEND_ERROR`,
  SET_LOGIN_SENDING: `${name}/SET_LOGIN_SENDING`,
  SET_LOGIN_SEND_ERROR: `${name}/SET_LOGIN_SEND_ERROR`,
};

export const setUserData = (data) => ({
  type: ActionTypes.SET_USER_DATA,
  payload: data,
});

export const setAuthChecking = (isChecking) => ({
  type: ActionTypes.SET_AUTH_CHECKING,
  payload: isChecking,
});

export const setRegisterSending = (isSending) => ({
  type: ActionTypes.SET_REGISTER_SENDING,
  payload: isSending,
});

export const setRegisterSendError = (error) => ({
  type: ActionTypes.SET_REGISTER_SEND_ERROR,
  payload: error,
});

export const setLoginSending = (isSending) => ({
  type: ActionTypes.SET_LOGIN_SENDING,
  payload: isSending,
});

export const setLoginSendError = (error) => ({
  type: ActionTypes.SET_LOGIN_SEND_ERROR,
  payload: error,
});

export const register = ({ email, password }) => (
  dispatch,
  _getState,
  { authApi }
) => {
  dispatch(setRegisterSending(true));
  dispatch(setRegisterSendError(""));
  return authApi
    .register(email, password)
    .catch((error) => {
      dispatch(setRegisterSendError(error));
      return Promise.reject(error);
    })
    .finally(() => dispatch(setRegisterSending(false)));
};

export const login = ({ email, password }) => (
  dispatch,
  _getState,
  { authApi }
) => {
  dispatch(setLoginSending(true));
  dispatch(setLoginSendError(""));
  return authApi
    .login(email, password)
    .then((data) => {
      dispatch(setUserData({ email }));
      localStorage.setItem('jwt', data.token)
    })
    .catch((error) => { 
      dispatch(setLoginSendError(error));
      return Promise.reject(error);
    })
    .finally(() => dispatch(setLoginSending(false)));
};

export const checkAuth = () => (dispatch, _getState, { authApi }) => {
  dispatch(setAuthChecking(true));
  const token = localStorage.getItem("jwt");
  if (token) {
    return authApi
      .checkToken(token)
      .then((res) => {
        dispatch(setUserData(res.data));
      })
      .catch((err) => err)
      .finally(() => dispatch(setAuthChecking(false)));
  } else {
    dispatch(setAuthChecking(false));
    return Promise.resolve();
  }
};

export const signOut = () => (dispatch) => {
  dispatch(setUserData(null));
  localStorage.removeItem("jwt");
};
