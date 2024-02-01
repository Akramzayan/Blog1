import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
const userInfoFromStorage = localStorage.getItem("account")
  ? JSON.parse(localStorage.getItem("account"))
  : null;
const initialState={
    user:{
        userInfo: userInfoFromStorage
    }
}
 
const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preLoadedState : initialState,
  
});

export default store;
