import { useSelector } from 'react-redux';
import FavoriteItem from 'components/FavoritesItem/FavoritesItem';
import { selectCars, selectFavorites } from 'redux/selectors';
import { useLocation } from 'react-router-dom';

const Catalog = () => {
  const location = useLocation();

  const cars = useSelector(
    location.pathname.includes('favorites') ? selectCars : selectFavorites
  );

  return (
    <>
      <ul>
        {cars?.map(car => (
          <FavoriteItem key={car.id} carInfo={car} />
        ))}
      </ul>
    </>
  );
};

export default Catalog;
