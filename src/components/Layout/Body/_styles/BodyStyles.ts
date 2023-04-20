import { DEFAULT_PADDING, MAX_WIDTH } from '@/src/plugins/theme/consts';
import styled from '@emotion/styled';

export const Container = styled('div')`
  display: flex;
  flex-flow: column;
  max-width: ${MAX_WIDTH}px;
  padding: 0 ${DEFAULT_PADDING}px;
  margin: auto;
`;
