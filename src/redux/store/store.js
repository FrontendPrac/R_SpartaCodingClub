//! 리덕스 툴킷
import { configureStore } from "@reduxjs/toolkit";
import myselfReducer from "../modules/myselfSlice";
import tilReducer from "../modules/tilSlice";

const store = configureStore({
  reducer: {
    myself: myselfReducer,
    til: tilReducer,
  },
});

export default store;

// !리덕스
// import { createStore, combineReducers } from "redux";
// import myself from "./modules/myself";

// // rootReducer 생성
// const rootReducer = combineReducers({ myself });

// // store 생성 - rootReducer와 enhancer가 들어감
// const store = createStore(rootReducer);

// export default store;
