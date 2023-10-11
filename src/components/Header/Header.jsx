import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import logo from "images/car-logo.png";
import burgerMenu from "images/animation/burger.json";
import Navigation from "components/Navigation/Navigation";
import { Burger, HeaderContainer, HeaderStyled, Img } from "./Header.styled";

const style = {
  width: 32,
  height: 32,
};
const Header = () => {
  const lottieRef = useRef();
  const [isOpenNav, setOpenNav] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767.9px)" });

  const onBurgerClick = () => {
    if (!isMobile) return;
    setOpenNav(!isOpenNav);
    isOpenNav
      ? lottieRef.current.setDirection(-1)
      : lottieRef.current.setDirection(1);
    lottieRef.current.play();
    setTimeout(() => {
      lottieRef.current.pause();
    }, 1000);
  };

  useEffect(() => {
    if (!isMobile && isOpenNav) {
      setOpenNav(false);
      lottieRef.current.setDirection(-1);
      lottieRef.current.play();
      setTimeout(() => {
        lottieRef.current.pause();
      }, 1000);
    }
  }, [isMobile, isOpenNav]);

  return (
    <HeaderContainer>
      <HeaderStyled>
        <NavLink to="/">
          <Img src={logo} alt="logo-compony" />
        </NavLink>
        <Burger
          onClick={onBurgerClick}
          lottieRef={lottieRef}
          animationData={burgerMenu}
          autoplay={false}
          loop={false}
          style={style}
        />
        <Navigation setOpenNav={onBurgerClick} isOpenNav={isOpenNav} />
      </HeaderStyled>
    </HeaderContainer>
  );
};

export default Header;
