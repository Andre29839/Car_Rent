import styled from "styled-components";

export const Section = styled.section`
  max-width: 375px;
  @media (min-width: 768px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1440px;
  }
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
`;
