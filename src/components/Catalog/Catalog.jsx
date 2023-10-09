import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CatalogItem from 'components/CatalogItem/CatalogItem';
import { selectCars, selectFavorites } from 'redux/selectors';
import { getAllCars, getCar } from 'redux/cars/carsOperation';
import { applyFilter } from 'utils/helpers';
import Filter from 'components/Filter/Filter';

const initialFilter = {
  make: '',
  rentalPrice: 100000,
  mileageFrom: 0,
  mileageTo: 100000,
};

const Catalog = () => {
  const location = useLocation();
  const dispactch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState(initialFilter);
  const isFavoritesPage = location.pathname.includes('favorites');
  const cars = useSelector(isFavoritesPage ? selectFavorites : selectCars);

  useEffect(() => {
    if (isFavoritesPage) return;
    dispactch(getCar(currentPage));
  }, [dispactch, currentPage, isFavoritesPage]);

  const onClickLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const onSubmit = () => {
    dispactch(getAllCars());
  };

  const carToRender = applyFilter(cars, filters);

  console.log(cars);
  return (
    <>
      {isFavoritesPage ? null : (
        <Filter onSubmit={onSubmit} setFilter={setFilters} />
      )}
      <ul>
        {carToRender?.map(car => (
          <CatalogItem key={car.id} carInfo={car} />
        ))}
      </ul>
      {isFavoritesPage || carToRender.length % 8 !== 0 ? null : (
        <button onClick={onClickLoadMore} type="button">
          Load More
        </button>
      )}
    </>
  );
};

export default Catalog;
