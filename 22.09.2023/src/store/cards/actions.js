export const name = "cards";

export const ActionTypes = {
  SET_DATA: `${name}/SET_DATA`,
  SET_DATA_LOADIN: `${name}/SET_DATA_LOADIN`,
  SET_DATA_LOAD_ERROR: `${name}/SET_DATA_LODAING_ERROR`,
  ADD: `${name}/ADD`,
  SET_ADD_SENDING: `${name}/SET_ADD_SENDING`,
  SET_ADD_SEND_ERROR: `${name}/SET_ADD_SEND_ERROR`,
  DELETE: `${name}/DELETE`,
  UPDATE: `${name}/UPDATE`,
};

export const setCards = (data) => ({type: ActionTypes.SET_DATA, payload: data});

export const setCardsLodaing = (isLoading) => ({
  type: ActionTypes.SET_DATA_LOADIN,
  payload: isLoading,
});

export const setCardsLoadError = (error) => ({
  type: ActionTypes.SET_DATA_LOAD_ERROR,
  payload: error,
});

export const addCardToStore = (item) => ({
      type: ActionTypes.ADD,
      payload: item,
});

export const setCardSending = (isSending) => ({
  type: ActionTypes.SET_ADD_SENDING,
  payload: isSending,
});

export const setCardSendError = (error) => ({
      type: ActionTypes.SET_ADD_SEND_ERROR,
      payload: error,
});

export const updateCard = (id, data) => ({
  type: ActionTypes.UPDATE,
  payload: { id, data },
});

const deleteFromStore = (id) => ({
  type: ActionTypes.DELETE,
  payload: id,
});

export const loadCards = () => (dispatch, _getState, { mestoApi }) => {
  dispatch(setCardsLodaing(true));
  dispatch(setCardsLoadError(""));
  return mestoApi
    .getCardList()
    .then((data) => dispatch(setCards(data)))
    .catch((err) => dispatch(setCardsLoadError(err)))
    .finally(() => dispatch(setCardsLodaing(false)));
};

export const addCard = (data) => (dispatch, _getState, { mestoApi }) => {
  dispatch(setCardSending(true));
  dispatch(setCardSendError(""));
  return mestoApi
    .addCard(data)
    .then((data) => dispatch(addCardToStore(data)))
    .catch((err) => {
      dispatch(setCardSendError(err));
      return Promise.reject(err);
    })
    .finally(() => dispatch(setCardSending(false)));
};

export const deleteCard = (id) => (dispatch, _getState, { mestoApi }) => {
  return mestoApi.removeCard(id).then(() => dispatch(deleteFromStore(id)));
};

export const changeLikeCardStatus = (id, like) => (
  dispatch,
  _getState,
  { mestoApi }
) => {
  return mestoApi
    .changeLikeCardStatus(id, like)
    .then((data) => dispatch(updateCard(id, data)))
};
