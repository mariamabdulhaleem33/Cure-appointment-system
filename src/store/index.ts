
import { configureStore } from '@reduxjs/toolkit';
import footerReducer from './slices/footerSlice';
import ProfileReducer from "./slices/profile.slice";

export const store = configureStore({
  reducer: {
    footer: footerReducer,
    profile: ProfileReducer,
  },
});

// TypeScript types for Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

