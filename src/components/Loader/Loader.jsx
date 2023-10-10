import { useLottie } from "lottie-react";
import carAnimation from "images/animation/car.json";
import { CenteredDiv, StyledDiv } from "./Loader.styled";

const style = {
  height: 250,
};

const LoaderAnimation = () => {
  const options = {
    animationData: carAnimation,
    loop: true,
  };
  const { View } = useLottie(options, style);
  return <>{View}</>;
};

const Loader = () => {
  return (
    <StyledDiv>
      <CenteredDiv>
        <LoaderAnimation />
      </CenteredDiv>
    </StyledDiv>
  );
};

export default Loader;
