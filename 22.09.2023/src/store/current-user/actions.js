export const name = "currentUser";

export const ActionTypes = {
  SET_DATA: `${name}/SET_DATA`,
  SET_DATA_LOADIN: `${name}/SET_DATA_LOADIN`,
  SET_DATA_LOAD_ERROR: `${name}/SET_DATA_LODAING_ERROR`,
  SET_INFO_SENDING: `${name}/SET_INFO_SENDING`,
  SET_INFO_SEND_ERROR: `${name}/SET_INFO_SENDING_ERROR`,
  SET_AVATAR_SENDING: `${name}/SET_AVATAR_SENDING`,
  SET_AVATAR_SEND_ERROR: `${name}/SET_AVATAR_SEND_ERROR`,
};

export const setData = (data) => ({
  type: ActionTypes.SET_DATA,
  payload: data,
});

export const setDataLoading = (isLoading) => ({
  type: ActionTypes.SET_DATA_LOADIN,
  payload: isLoading,
});

export const setDataLoadError = (error) => ({
  type: ActionTypes.SET_DATA_LOAD_ERROR,
  payload: error,
});

export const setInfoSending = (isSending) => ({
  type: ActionTypes.SET_INFO_SENDING,
  payload: isSending,
});

export const setInfoSendError = (error) => ({
  type: ActionTypes.SET_INFO_SEND_ERROR,
  payload: error,
});

export const setAvatarSending = (isSending) => ({
  type: ActionTypes.SET_AVATAR_SENDING,
  payload: isSending,
});

export const setAvatarSendError = (error) => ({
  type: ActionTypes.SET_AVATAR_SEND_ERROR,
  payload: error,
});

export const loadData = () => (dispatch, _getState, { mestoApi }) => {
  dispatch(setDataLoading(true));
  dispatch(setDataLoadError(""));
  return mestoApi
    .getUserInfo()
    .then((data) => dispatch(setData(data)))
    .catch((err) => dispatch(setDataLoadError(err)))
    .finally(() => dispatch(setDataLoading(false)));
};

export const sendInfo = (data) => (dispatch, _getState, { mestoApi }) => {
  dispatch(setInfoSending(true));
  dispatch(setInfoSendError(""));
  return mestoApi
    .setUserInfo(data)
    .then((data) => dispatch(setData(data)))
    .catch((err) => {
      dispatch(setInfoSendError(err));
      return Promise.reject(err);
    })
    .finally(() => dispatch(setInfoSending(false)));
};

export const sendAvatar = (data) => (dispatch, _getState, { mestoApi }) => {
  dispatch(setAvatarSending(true));
  dispatch(setAvatarSendError(""));
  return mestoApi
    .setUserAvatar(data)
    .then((data) => dispatch(setData(data)))
    .catch((err) => {
      dispatch(setAvatarSendError(err));
      return Promise.reject(err);
    })
    .finally(() => dispatch(setAvatarSending(false)));
};
