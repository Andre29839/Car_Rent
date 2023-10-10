import styled from "styled-components";
import { ReactComponent as Heart } from "images/svg/heart.svg";

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 274px;
`;

export const ImageContainer = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
`;

export const StyledImg = styled.img`
  width: 274px;
  height: 228px;
`;

export const StyledButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  background-color: transparent;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  font-weight: medium;
  font-size: 16px;
  line-height: 24px;
`;

export const InfoContainer = styled.div`
  margin-top: 8px;

  & > * {
    display: inline-block;
    color: rgba(0, 0, 0, 0.5);
    border-right: solid rgba(0, 0, 0, 0.1) 1px;
    padding-left: 6px;
    padding-right: 6px;
    font-size: 12px;
    line-height: 18px;

    &:last-child {
      border-right-width: 0;
    }
  }
`;

export const LearnMoreButton = styled.button`
  margin-top: 16px;
  padding: 12px 0;
  background-color: #3470ff;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
  border-radius: 12px;
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
`;

export const Text = styled.span`
  color: blue;
`;

export const HeartIcon = styled(Heart)`
  width: 18px;
  height: 18px;

  &.favorite {
    fill: #007bff;

    & > g > path {
      stroke: transparent;
    }
  }

  &.not-favorite {
    fill: transparent;

    & > g > path {
      stroke: white;
    }
  }
`;
