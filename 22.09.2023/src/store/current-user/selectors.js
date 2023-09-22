import {name} from './actions';

export const getCurrentUser = (store) => store[name].data;
export const getIsInfoSending = (store) => store[name].infoSending;
export const getIsInfoSendError = (store) => store[name].infoSendError;
export const getIsAvatarSending = (store) => store[name].avatarSending;
export const getIsAvatarSendError = (store) => store[name].avatarSendError;