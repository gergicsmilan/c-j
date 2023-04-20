import styled from '@emotion/styled';

export const CartItem = styled('div')`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px 10px;
  height: 90px;
  border-radius: 5px;
  border: 1px solid black;

  img {
    border-radius: 5px;
  }
`;

export const ItemDetails = styled('div')`
  display: flex;
  flex-flow: column;
  align-self: start;

  h1 {
    margin: 0;
    font-size: 1.2rem;
    line-height: 1rem;
  }

  p {
    margin: 0;
    color: grey;
    font-size: 0.8rem;
  }
`;

export const ActionWrapper = styled('div')`
  display: flex;
  align-items: center;
  margin-left: auto;

  p {
    font-weight: bold;
    margin: 0 10px;
  }
`;
