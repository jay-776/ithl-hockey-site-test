import { configureStore } from "@reduxjs/toolkit";
import scheduleSlice from "./reducers/scheduleSlice";
import navSlice from "./reducers/navSlice";
import authSlice from "./reducers/authSlice";
// import todosReducer from '../app/reducers/todosSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    schedule: scheduleSlice,
    nav: navSlice,
    // teamList: teamListSlice,
    // todos: todosReducer
  },
});

export default store;
