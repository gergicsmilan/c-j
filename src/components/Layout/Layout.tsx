import { ReactNode } from 'react';
import Body from './Body/Body';
import Header from './Header/Header';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <Body>{children}</Body>
  </>
);

export default Layout;
