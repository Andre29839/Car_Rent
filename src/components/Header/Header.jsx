import { useRef, useState } from 'react';
import Lottie from 'lottie-react';
import { useMediaQuery } from 'react-responsive';
// import { ReactComponent as Logo } from '../../images/svg/logo.svg';
import burgerMenu from 'images/loader/animation.json';
import SideBar from 'components/SideBar/SideBar';

const style = {
  width: 32,
  height: 32,
};

export const Header = () => {
  const lottieRef = useRef();
  const [isOpenNav, setOpenNav] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' });

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

  return (
    <header>
      <div>
        {/* <Logo width={50} height={50} /> */}
        <Lottie
          onClick={onBurgerClick}
          lottieRef={lottieRef}
          animationData={burgerMenu}
          autoplay={false}
          loop={false}
          style={style}
          className="md:hidden"
        />
        <SideBar setOpenNav={onBurgerClick} isOpenNav={isOpenNav} />
      </div>
    </header>
  );
};
