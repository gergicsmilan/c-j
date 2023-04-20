import useShoppingCartSlice from '@/src/store/hooks/useShoppingCartSlice';
import { Button, Rating } from '@mui/material';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import { useMemo } from 'react';
import {
  ActionWrapper,
  CartItem,
  ItemDetails,
} from './_stlyes/CartDetailsStyles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const CartDetails = () => {
  const { products, deleteProductToCart, addProductToCart } =
    useShoppingCartSlice();

  const isEmpty = useMemo(() => !products.length, [products.length]);

  if (isEmpty) return <h1>Your cart is empty!</h1>;

  return (
    <Stack spacing={2}>
      {products.map((product, i) => (
        <CartItem key={`${product.id}_${i}`}>
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={75}
            height={75}
          />
          <ItemDetails>
            <h1>{product.title}</h1>
            <p>{product.brand}</p>
            <Rating
              name="read-only"
              value={product.rating}
              readOnly
              size="small"
            />
          </ItemDetails>
          <ActionWrapper>
            <Button
              variant="contained"
              color="primary"
              onClick={() => addProductToCart(product)}
            >
              <AddCircleOutlineIcon />
            </Button>
            <p>{product.quantity}</p>
            <Button
              variant="contained"
              color="error"
              onClick={() => deleteProductToCart(product)}
            >
              <RemoveCircleOutlineIcon />
            </Button>
          </ActionWrapper>
        </CartItem>
      ))}
    </Stack>
  );
};

export default CartDetails;
