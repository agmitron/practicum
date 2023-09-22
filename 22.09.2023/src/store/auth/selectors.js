import {name} from './actions';

export const getIsAuth = (store) => !!store[name].data;
export const getUserData = (store) => store[name].data;
export const getIsAuthChecking = (store) => store[name].authChecking;
export const getRegisterSending = (store) => store[name].registerSending;
export const getRegisterError = (store) => store[name].registerError;
export const getLoginSending = (store) => store[name].loginSending;
export const getLoginError = (store) => store[name].loginError;
