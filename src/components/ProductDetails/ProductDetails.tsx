import { Product } from '@/src/httpService/get/types';
import { Chip, Divider, Grid, Rating, Tooltip } from '@mui/material';
import Link from 'next/link';
import {
  AddToCartBtn,
  ChipWrapper,
  Container,
  ImgContainer,
} from './_styles/ProductDetailsStyles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Image from 'next/image';
import { ImgWrapper } from '../ProductList/ProductItem/_styles/ProductItemStyles';
import StoreIcon from '@mui/icons-material/Store';
import useShoppingCartSlice from '@/src/store/hooks/useShoppingCartSlice';

type Props = {
  product: Product;
};

const ProductDetails = ({ product }: Props) => {
  const { addProductToCart } = useShoppingCartSlice();

  const { brand, description, images, price, rating, stock, title } = product;

  return (
    <Container>
      <Link href="/">Back to home</Link>
      <h1>{title}</h1>
      <Divider />
      <h4>{brand}</h4>
      <Rating name="read-only" value={rating} readOnly />
      <ChipWrapper>
        <Tooltip title="Price">
          <Chip label={price} icon={<MonetizationOnIcon />} size="medium" />
        </Tooltip>
        <Tooltip title="Available products">
          <Chip label={stock} icon={<StoreIcon />} size="medium" />
        </Tooltip>
      </ChipWrapper>
      <div>
        <b>Description:</b> <br /> {description}
      </div>
      <ImgContainer container spacing={1}>
        {images.map((imageUrl, i) => (
          <Grid item xs={12} sm={4} md={2} key={i}>
            <ImgWrapper>
              <Image
                src={imageUrl}
                alt={imageUrl}
                fill
                style={{ objectFit: 'fill' }}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                priority
              />
            </ImgWrapper>
          </Grid>
        ))}
      </ImgContainer>
      <AddToCartBtn
        color="primary"
        variant="contained"
        endIcon={<ShoppingCartIcon />}
        onClick={() => addProductToCart(product)}
      >
        Add to cart
      </AddToCartBtn>
    </Container>
  );
};

export default ProductDetails;
