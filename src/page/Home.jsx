import Home from 'components/Home/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetCarStore } from 'redux/cars/carsOperation';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCarStore());
  });

  return <Home />;
};

export default HomePage;
