import Layout from '@/src/components/Layout/Layout';
import ProductList from '@/src/components/ProductList/ProductList';
import { getProducts } from '@/src/httpService/get';
import { Product } from '@/src/httpService/get/types';
import { GetStaticProps } from 'next';

type Props = {
  products: Product[];
};

const ProductsListPage = ({ products }: Props) => (
  <Layout>
    <ProductList products={products} />
  </Layout>
);

export default ProductsListPage;

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts();
  return { props: { products } };
};
