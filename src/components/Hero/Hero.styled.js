import styled from "styled-components";
import { NavLink } from "react-router-dom";
import BackgroundImg from "images/homeImg.jpg";

export const Section = styled.section`
  padding: 100px 0;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.2)),
    url(${BackgroundImg}) no-repeat center/cover;
  @media (min-width: 768px) {
    padding: 150px 0;
  }
`;

export const Title = styled.h1`
  color: #fff;
  line-height: 40px;
  font-size: 36px;
  text-align: center;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  width: 169px;
  margin: 20px auto 0;
  padding: 12px;
  background-color: #3470ff;
  border-radius: 12px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  line-height: 20px;
  font-size: 14px;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }

  @media (min-width: 1280px) {
    font-size: 20px;
    width: 280px;
    padding: 20px;
  }
`;
