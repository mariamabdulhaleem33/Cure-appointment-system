import { configureStore } from '@reduxjs/toolkit';
import footerReducer from './slices/footerSlice';

export const store = configureStore({
  reducer: {
    footer: footerReducer,
  },
});

// TypeScript types for Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;