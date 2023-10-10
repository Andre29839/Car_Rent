import styled from "styled-components";

export const Section = styled.section`
  padding-bottom: 20px;
  padding-top: 20px;

  @media (min-width: 1440px) {
    display: flex;
    gap: 8px;
  }
`;

export const TextContainer = styled.div`
  color: #333333;
  margin-bottom: 12px;
  font-size: 14px;
  background-color: #f0f0f0;
  padding: 4px;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    letter-spacing: 0.1em;
    margin-bottom: 0;
  }
`;

export const StyledImg = styled.img`
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 753px;
    height: 450px;
  }

  @media (min-width: 1440px) {
    width: 600px;
    height: 380px;
  }
`;
