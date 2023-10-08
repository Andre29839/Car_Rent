import styled from 'styled-components';

export const ContainerBox = styled.div`
  margin: 0 auto;
  width: 320px;

  @media screen and (max-width: 1439.9px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 150px 128px;
  }
`;
