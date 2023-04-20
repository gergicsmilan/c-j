import { configureStore } from '@reduxjs/toolkit';
import shoppingCartSlice from './slices/shoppingCartSlice';

const store = configureStore({
  reducer: { shoppingCart: shoppingCartSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export default store;
