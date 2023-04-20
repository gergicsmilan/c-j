import axiosInstance from '../Axios/axios';
import { Base, Product } from './types';

export const getProducts = async () => {
  const { data } = await axiosInstance.get<Base<Product>>(
    'products/category/smartphones'
  );
  return data.products;
};

export const getProductById = async (productId: string) => {
  const { data } = await axiosInstance.get<Product>(`product/${productId}`);
  return data;
};
