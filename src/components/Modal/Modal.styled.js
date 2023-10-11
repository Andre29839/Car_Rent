import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
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
  border-radius: 24px;
  background-color: white;
  top: 58%;

  @media (min-width: 768px) {
    max-width: 450px;
    padding: 40px;
    top: 58%;
  }
  @media (min-width: 1000px) {
    top: 50%;
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
  cursor: pointer;

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
    min-height: 182px;
  }

  @media (min-width: 1280px) {
    width: 470px;
    min-height: 231px;
  }
`;

export const StyledParagraph = styled.p`
  margin-top: 12px;
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
`;

export const StyledDivDesc = styled.div`
  margin-top: 8px;

  & > * {
    display: inline-block;
    color: rgba(0, 0, 0, 0.5);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    padding-left: 6px;
    padding-right: 6px;
    font-size: 12px;
    line-height: 18px;
  }

  & > .last {
    border-right: none;
  }
`;

export const StyledParagraphDesc = styled.p`
  font-size: 14px;
  margin-top: 14px;
  line-height: 20px;
`;

export const StyledParagraphRental = styled.p`
  margin-top: 18px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export const StyledDivRental = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;

  & > p {
    background-color: #f9f9f9;
    border-radius: 35px;
    padding: 7px 10px;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
  }
`;

export const SpanRental = styled.span`
  color: #3470ff;
`;

export const StyledLink = styled.a`
  display: block;
  width: 100%;
  max-width: 168px;
  margin-top: 16px;
  padding: 12px;
  background-color: #3470ff;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }

  border-radius: 12px;
  color: white;
  font-weight: 600;
  text-align: center;
  font-size: 14px;
  line-height: 20px;

  @media (min-width: 768px) {
    margin-top: 24px;
  }
`;
