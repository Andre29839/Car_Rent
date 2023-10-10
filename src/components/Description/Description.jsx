import homeImg from "images/home-key.jpg";
import { Section, StyledImg, TextContainer } from "./Description.styled";

const Description = () => {
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
      </TextContainer>
      <StyledImg src={homeImg} alt="Parking" loading="lazy" />
    </Section>
  );
};

export default Description;
