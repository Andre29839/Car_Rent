import { useEffect } from "react";
import { Nav, NavLinks } from "./Navigation.styled";

const Navigation = ({ isOpenNav, setOpenNav }) => {
  useEffect(() => {
    document.body.style.overflow = "visible";
    if (isOpenNav) document.body.style.overflow = "hidden";
  }, [isOpenNav]);

  return (
    <Nav $isOpenNav={isOpenNav}>
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
