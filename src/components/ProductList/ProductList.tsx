import { Product } from '@/src/httpService/get/types';
import Grid from '@mui/material/Grid';
import ProductItem from './ProductItem/ProductItem';

type Props = {
  products: Product[];
};

const ProductList = ({ products }: Props) => (
  <Grid container spacing={4}>
    {products.map((product) => (
      <Grid item xs={12} sm={6} md={3} key={product.id}>
        <ProductItem product={product} />
      </Grid>
    ))}
  </Grid>
);

export default ProductList;
