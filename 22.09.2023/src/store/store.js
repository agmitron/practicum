import { createStore, applyMiddleware  } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from "./reducer";
import mestoApi from "../utils/mesto-api";
import * as authApi from "../utils/auth-api";

const store = createStore(
  reducer,
  composeWithDevTools(  
    applyMiddleware(thunk.withExtraArgument({mestoApi, authApi})),
  )
);

export default store;