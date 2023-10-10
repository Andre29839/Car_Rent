import styled from "styled-components";
import Lottie from "lottie-react";

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  max-width: 375px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: 1024px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1170px;
  }
`;

export const HeaderContainer = styled.header`
  background-color: #f0f0f0;
  margin-bottom: 50px;
`;

export const Burger = styled(Lottie)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 100px;
  height: 75px;

  @media screen and (min-width: 1440px) {
    width: 135px;
    height: 100px;
  }
`;
