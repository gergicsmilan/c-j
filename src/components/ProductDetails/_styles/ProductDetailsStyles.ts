import styled from '@emotion/styled';
import { Button, Grid } from '@mui/material';

export const Container = styled('div')`
  display: flex;
  flex-flow: column;

  h1 {
    margin: 0;
  }

  h4 {
    margin: 0 0 5px 0;
    color: grey;
  }
`;

export const ChipWrapper = styled('div')`
  display: flex;
  gap: 5px;
  margin: 5px 0 10px 0;
`;

export const ImgContainer = styled(Grid)`
  margin: 15px 0 15px 0;
`;

export const AddToCartBtn = styled(Button)`
  margin-left: auto;
`;
