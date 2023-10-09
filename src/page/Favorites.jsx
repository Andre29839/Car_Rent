import Catalog from 'components/Catalog/Catalog';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetCarStore } from 'redux/cars/carsOperation';

const FavoritesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCarStore());
  });

  return <Catalog isFavorite={true} />;
};

export default FavoritesPage;
