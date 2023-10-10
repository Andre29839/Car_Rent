import { Section, StyledLink, Title } from "./Hero.styled";

const Hero = () => {
  return (
    <Section>
      <Title>Rent Car Service</Title>
      <StyledLink to="/catalog">Go to our Catalog</StyledLink>
    </Section>
  );
};

export default Hero;
