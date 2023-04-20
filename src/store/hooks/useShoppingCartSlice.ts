import { Product } from '@/src/httpService/get/types';
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  shoppingCartActions,
  StoredProduct,
} from '../slices/shoppingCartSlice';
import { RootState } from '../store';

const useShoppingCartSlice = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.shoppingCart);

  const itemCount = useMemo(
    () => products.reduce((prev, { quantity }) => prev + quantity, 0),
    [products]
  );

  const initCart = useCallback(
    (products: StoredProduct[] | undefined) => {
      if (!products) return;
      dispatch(shoppingCartActions.setShoppingCart(products));
    },
    [dispatch]
  );

  const addProductToCart = useCallback(
    (product: Product) => {
      const _product = products.find((p) => p.id === product.id);

      if (!_product) {
        const newShoppingCart = [
          ...products,
          { ...product, quantity: 1 } as StoredProduct,
        ];
        dispatch(shoppingCartActions.setShoppingCart(newShoppingCart));
      } else {
        const newProduct = { ..._product, quantity: _product.quantity + 1 };
        const newShoppingCart = products.map((p) =>
          p.id === newProduct.id ? newProduct : p
        );
        dispatch(shoppingCartActions.setShoppingCart(newShoppingCart));
      }
    },
    [dispatch, products]
  );

  const deleteProductToCart = useCallback(
    (product: StoredProduct) => {
      if (product.quantity > 1) {
        const newProduct = { ...product, quantity: product.quantity - 1 };
        const newShoppingCart = products.map((p) =>
          p.id === newProduct.id ? newProduct : p
        );
        dispatch(shoppingCartActions.setShoppingCart(newShoppingCart));
      } else {
        const newShoppingCart = [
          ...products.filter((p) => p.id !== product.id),
        ];
        dispatch(shoppingCartActions.setShoppingCart(newShoppingCart));
      }
    },
    [dispatch, products]
  );

  return {
    products,
    itemCount,
    initCart,
    addProductToCart,
    deleteProductToCart,
  };
};

export default useShoppingCartSlice;
