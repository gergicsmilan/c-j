import styled from '@emotion/styled';

export const Card = styled('div')`
  display: flex;
  flex-flow: column;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #000;
  text-decoration: none;
  height: 350px;
`;

export const ImgWrapper = styled('div')`
  position: relative;
  height: 140px;
`;

export const DetailsWrapper = styled('div')`
  display: flex;
  flex-flow: column;
  padding: 8px;
  flex: 1;

  h3 {
    margin: 4px 0 2px 0;
  }

  button {
    margin: auto 0 0 auto;
  }
`;
