import styled from "styled-components";

export const StyledButton = styled.button`
  display: none;
  padding: 10px;
  margin: auto;
  gap: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #3470ff;
  &:hover {
    background-color: #0b44cd;
  }
  border-radius: 12px;
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  line-height: 20px;

  @media (max-width: 767.9px) {
    display: flex;
  }
`;

export const StyledForm = styled.form`
  display: ${({ isDisplaySearch }) => (isDisplaySearch ? "flex" : "none")};
  flex-direction: row;
  align-items: center;
  padding: 25px 0;
  gap: 18px;
  padding-bottom: 10px;
  max-width: 570px;
  margin: auto;
  margin-bottom: 50px;

  @media (max-width: 767.9px) {
    flex-wrap: wrap;
    width: 320px;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: flex-end;
    max-width: 750px;
  }

  @media (min-width: 1200px) {
    max-width: 860px;
  }
`;

export const StyledDiv = styled.div`
  width: 95%;
  display: flex;
  gap: 18px;

  @media (max-width: 767.9px) {
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    width: auto;
  }

  & > label {
    display: block;
    display: flex;
  }
`;

export const Text = styled.p`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  margin-bottom: 8px;
`;

export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 767.9px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const DivLable = styled.div`
  display: flex;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-image: linear-gradient(to right, #8a8a8933, #8a8a8933) 1;
  width: 95%;
  border-radius: 14px;
  overflow: hidden;
  font-size: 14px;
  line-height: 20px;
  font-weight: medium;
  color: #121417;
  border: none;
  height: 50px;

  @media (min-width: 768px) {
    width: 200px;
    font-size: 16px;
  }

  @media (min-width: 1200px) {
    width: 320px;
    font-size: 18px;
  }
`;

export const Input = styled.input`
  background-color: #f7f7fb;
  height: 100%;
  padding: 10px;
  width: 100%;

  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  &::placeholder {
    color: #121417;
  }
  &:focus {
    outline: 1px solid #3470ff;
  }

  @media (min-width: 1200px) {
    padding-left: 24px;
  }
`;

export const InputSecond = styled.input`
  background-color: #f7f7fb;
  height: 100%;
  padding: 10px;
  width: 100%;

  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  &::placeholder {
    color: #121417;
  }
  &:focus {
    outline: 1px solid #3470ff;
  }

  @media (min-width: 1200px) {
    padding-left: 24px;
  }
`;

export const Button = styled.button`
  width: 95%;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #3470ff;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  height: 50px;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }

  @media (min-width: 768px) {
    width: 136px;
  }

  @media (min-width: 1200px) {
    padding-left: 44px;
    padding-right: 44px;
    width: auto;
  }
`;
