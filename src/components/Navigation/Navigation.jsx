import { useEffect } from "react";
import { Nav, NavLinks } from "./Navigation.styled";
import { useMediaQuery } from "react-responsive";

const Navigation = ({ isOpenNav, setOpenNav }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767.9px)" });
  useEffect(() => {
    document.body.style.overflow = "visible";
    if (isOpenNav) document.body.style.overflow = "hidden";
  }, [isOpenNav]);

  return (
    <Nav isOpenNav={isOpenNav}>
      <NavLinks onClick={setOpenNav} to="/">
        Home
      </NavLinks>
      <NavLinks onClick={setOpenNav} to="/catalog">
        Catalog
      </NavLinks>
      <NavLinks onClick={setOpenNav} to="/favorites">
        Favorites
      </NavLinks>
    </Nav>
  );
};

export default Navigation;
