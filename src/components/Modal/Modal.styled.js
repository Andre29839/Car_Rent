import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ResponsiveDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  padding: 20px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  border-radius: 24px;
  background-color: white;

  @media (min-width: 768px) {
    max-width: 450px;
    padding: 40px;
  }

  @media (min-width: 1280px) {
    max-width: 540px;
  }
`;

export const PositionedElement = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;

  @media (min-width: 768px) {
    top: 16px;
    right: 16px;
  }
`;

export const StyledDiv = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 370px;
    height: 190px;
  }

  @media (min-width: 1280px) {
    width: 470px;
    height: 225px;
  }
`;
