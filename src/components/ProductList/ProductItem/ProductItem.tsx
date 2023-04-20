import { Product } from '@/src/httpService/get/types';
import { Button, Rating } from '@mui/material';
import { Card, DetailsWrapper, ImgWrapper } from './_styles/ProductItemStyles';
import Image from 'next/image';
import { useRouter } from 'next/router';

type Props = {
  product: Product;
};

const ProductItem = ({ product }: Props) => {
  const router = useRouter();

  return (
    <Card>
      <ImgWrapper>
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          style={{ objectFit: 'fill' }}
          priority
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        />
      </ImgWrapper>
      <DetailsWrapper>
        <h3>{product.title}</h3>
        <Rating name="read-only" value={product.rating} readOnly size="small" />
        <p>{product.description}</p>
        <Button
          variant="contained"
          onClick={() => router.push(`/product/${product.id}`)}
        >
          View product
        </Button>
      </DetailsWrapper>
    </Card>
  );
};

export default ProductItem;
