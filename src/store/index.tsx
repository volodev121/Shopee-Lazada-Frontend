import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth.slice";
import menuSlice from "./menu.slice";
const store = configureStore({
  reducer: { auth: authSlice, menu: menuSlice },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
