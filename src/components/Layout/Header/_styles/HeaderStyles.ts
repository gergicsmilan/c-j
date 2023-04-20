import { DEFAULT_PADDING, MAX_WIDTH } from '@/src/plugins/theme/consts';
import styled from '@emotion/styled';
import Link from 'next/link';

export const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 20px ${DEFAULT_PADDING}px;
  max-width: ${MAX_WIDTH}px;
  margin: 0 auto 20px auto;
  height: 60px;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const LinkWrapper = styled('div')`
  display: flex;
  gap: 4px;
  alig-items: center;
  svg {
    fill: #000;
  }
`;
