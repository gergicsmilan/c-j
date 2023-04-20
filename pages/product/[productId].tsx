import Layout from '@/src/components/Layout/Layout';
import ProductDetails from '@/src/components/ProductDetails/ProductDetails';
import { getProductById, getProducts } from '@/src/httpService/get';
import { Product } from '@/src/httpService/get/types';
import { GetStaticPaths, GetStaticProps } from 'next';

type Props = {
  product: Product;
};

const ProductItemPage = ({ product }: Props) => (
  <Layout>
    <ProductDetails product={product} />
  </Layout>
);

export default ProductItemPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const productId = context.params?.productId;

  if (!productId)
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };

  const product = await getProductById(productId as string);
  return { props: { product: product } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getProducts();
  const params = products.map((p) => ({
    params: { productId: p.id.toString() },
  }));
  return { paths: params, fallback: false };
};
