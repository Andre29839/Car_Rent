import styled from "styled-components";

export const Message = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
`;

export const CarList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px 29px;
  margin-bottom: 20px;
`;

export const LoadMoreButton = styled.button`
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  color: #3470ff;

  &:hover,
  &:focus {
    color: #0b44cd;
  }

  font-weight: medium;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
`;
