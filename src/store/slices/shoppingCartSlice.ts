import { Product } from '@/src/httpService/get/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type StoredProduct = Product & { quantity: number };

const initialState = {
  products: [] as StoredProduct[],
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    setShoppingCart(state, action: PayloadAction<StoredProduct[]>) {
      state.products = action.payload;
    },
  },
});

export const shoppingCartActions = shoppingCartSlice.actions;
export default shoppingCartSlice;
