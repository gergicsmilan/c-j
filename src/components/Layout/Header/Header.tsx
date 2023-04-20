import Badge from '../../Badge/Badge';
import { Container, HomeLink, LinkWrapper } from './_styles/HeaderStyles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import useShoppingCartSlice from '@/src/store/hooks/useShoppingCartSlice';

const Header = () => {
  const { itemCount } = useShoppingCartSlice();

  return (
    <Container>
      <HomeLink href="/">
        <b>Cool mobile shop</b>
      </HomeLink>
      <LinkWrapper>
        <Link href="/cart">
          <Badge count={itemCount} Icon={<ShoppingCartIcon />} />
        </Link>
      </LinkWrapper>
    </Container>
  );
};

export default Header;
