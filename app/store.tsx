import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../features/accountSlice";
import configReducer from "../features/configSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    config: configReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
