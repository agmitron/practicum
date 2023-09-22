import { ActionTypes } from "./actions";

const initialState = {
  data: [],
  loading: false,
  loadError: "",
  isSending: false,
  sendError: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_DATA:
      return { ...state, data: action.payload };
    case ActionTypes.SET_DATA_LOADIN:
      return { ...state, loading: action.payload };
    case ActionTypes.SET_DATA_LOAD_ERROR:
      return { ...state, loadError: action.payload };
    case ActionTypes.ADD:
      return { ...state, data: [action.payload, ...state.data] };
    case ActionTypes.SET_ADD_SENDING:
      return { ...state, isSending: action.payload };
    case ActionTypes.SET_ADD_SEND_ERROR:
      return { ...state, sendError: action.payload };
    case ActionTypes.DELETE:
      return {
        ...state,
        data: state.data.filter((c) => c._id !== action.payload),
      };
    case ActionTypes.UPDATE:
      return {
        ...state,
        data: state.data.map((c) =>
          c._id === action.payload.id ? action.payload.data : c
        ),
      };
    default:
      return state;
  }
};

export default reducer;
