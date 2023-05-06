import { createStore, combineReducers } from "redux";
import myself from "./modules/myself";

// rootReducer 생성
const rootReducer = combineReducers({ myself });

// store 생성 - rootReducer와 enhancer가 들어감
const store = createStore(rootReducer);

export default store;
