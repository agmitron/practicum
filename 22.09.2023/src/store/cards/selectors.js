import {name} from './actions';

export const getCards = (store) => store[name].data;
export const getIsCardsLodaing = (store) => store[name].loading;
export const getCardsLoadError = (store) => store[name].loadError;

export const getIsCardSending = (store) => store[name].isSending;
export const getCardSendError = (store) => store[name].sendError;