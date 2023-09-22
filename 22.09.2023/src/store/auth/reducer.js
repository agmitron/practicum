import { ActionTypes } from "./actions";

const initialState = {
  data: null,
  authChecking: true,
  registerSending: false,
  registerError: "",
  loginSending: false,
  loginError: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER_DATA:
      return { ...state, data: action.payload };
    case ActionTypes.SET_AUTH_CHECKING:
      return { ...state, authChecking: action.payload };
    case ActionTypes.SET_REGESTER_SENDING:
      return { ...state, registerSending: action.payload };
    case ActionTypes.SET_REGISTER_SEND_ERROR:
      return { ...state, registerError: action.payload };
    case ActionTypes.SET_LOGIN_SENDING:
      return { ...state, loginSending: action.payload };
    case ActionTypes.SET_LOGIN_SEND_ERROR:
      return { ...state, loginError: action.payload };
    default:
      return state;
  }
};

export default reducer;
