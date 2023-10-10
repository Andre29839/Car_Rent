import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  position: absolute;
  left: -200%;
  display: flex;
  transition: ease-in-out;
  transition-duration: 200ms;

  & > .active {
    text-decoration-line: underline;
  }

  ${(props) =>
    props.isOpenNav &&
    css`
      left: 0;
      top: 0;
      z-index: 10;
      flex-direction: column;
      gap: 24px;
      padding-top: 40px;
      padding-left: 20px;
      width: 70vw;
      background-color: #f9f9f9;
      height: 100vh;
    `}

  @media (min-width: 768px) {
    position: static;
    gap: 28px;
  }
`;

export const NavLinks = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;

  &:hover {
    text-decoration: underline;
  }
  @media screen and (min-width: 1440px) {
    font-size: 30px;
  }
  @media screen and (max-width: 767.9px) {
    font-size: 30px;
  }
`;
