import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CatalogItem from 'components/CatalogItem/CatalogItem';
import { selectCars, selectFavorites } from 'redux/selectors';
import getCar from 'redux/cars/carsOperation';
import { applyFilter } from 'utils/helpers';
import Filter from 'components/Filter/Filter';

const initialFilter = {
  make: '',
  rentalPrice: Infinity,
  mileageFrom: 0,
  mileageTo: Infinity,
};

const Catalog = () => {
  const location = useLocation();
  const dispactch = useDispatch();
  const cars = useSelector(
    location.pathname.includes('favorite') ? selectFavorites : selectCars
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState(initialFilter);

  useEffect(() => {
    dispactch(getCar(currentPage));
  }, [dispactch, currentPage]);

  const onClickLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const carToRender = applyFilter(cars, filters);

  return (
    <>
      <Filter setFilters={setFilters} />
      <ul>
        {carToRender?.map(car => (
          <CatalogItem key={car.id} carInfo={car} />
        ))}
      </ul>
      {location.pathname.includes('favorite') || currentPage > 3 ? null : (
        <button onClick={onClickLoadMore} type="button">
          Load More
        </button>
      )}
    </>
  );
};

export default Catalog;
