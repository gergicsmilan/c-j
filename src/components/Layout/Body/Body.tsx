import { ReactNode } from 'react';
import { Container } from './_styles/BodyStyles';

type Props = {
  children: ReactNode;
};

const Body = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Body;
