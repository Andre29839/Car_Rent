import { useMediaQuery } from "react-responsive";
import homeImg from "images/home-key.jpg";
import homeScreen from "images/home-screen.png";
import { Section, StyledImg, TextContainer } from "./Description.styled";
import animData from "images/animation/animation-home.json";
import Lottie from "lottie-react";

const style = {
  width: 500,
  height: 400,
};

const Description = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1279.9px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1280px)" });
  const isBiggerScreen = useMediaQuery({ query: "(min-width: 1440px)" });
  return (
    <Section>
      <TextContainer>
        Discover the ultimate car rental experience with Our Service, where you
        can find the perfect vehicle for your needs and preferences. Whether you
        want to explore new destinations, attend important meetings, or simply
        enjoy the freedom of driving, we have the solution for you. Choose from
        a variety of cars, from cozy sedans for urban trips to spacious SUVs for
        family fun. We offer clear and honest pricing, with no hidden charges,
        so you can budget with confidence. Safety is our top concern, and our
        cars are regularly checked and serviced. Join the millions of happy
        customers who have trusted us for their car rental needs. Book your car
        today with Our Service and get ready for an amazing adventure.
        {isBigScreen ? (
          <Lottie animationData={animData} autoplay loop style={style} />
        ) : null}
      </TextContainer>
      {isBiggerScreen ? (
        <StyledImg src={homeImg} alt="Parking" loading="lazy" />
      ) : null}
      {isSmallScreen ? (
        <StyledImg src={homeScreen} alt="Parking" loading="lazy" />
      ) : null}
    </Section>
  );
};

export default Description;
