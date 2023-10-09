import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    document.body.style.overflow = 'visible';
    if (isOpen) document.body.style.overflow = 'hidden';
  }, [isOpen]);

  return (
    <>
      <nav>
        <NavLink onClick={setIsOpen} to="/">
          Home
        </NavLink>
        <NavLink onClick={setIsOpen} to="/catalog">
          Catalog
        </NavLink>
        <NavLink onClick={setIsOpen} to="/favorites">
          Favorites
        </NavLink>
      </nav>
    </>
  );
};

export default SideBar;
