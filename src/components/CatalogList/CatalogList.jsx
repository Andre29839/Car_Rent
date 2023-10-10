import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { selectCars, selectFavorites } from "redux/selectors";
import { getAllCars, getCars } from "redux/cars/carsOperations";
import { applyFilters } from "utils/helpers";
import CatalogItem from "components/CatalogItem/CatalogItem";
import Filter from "components/Filter/Filter";
import { CarList, LoadMoreButton, Message } from "./CatalogList.styled";

export const initialFilters = {
  make: "",
  rentalPrice: 100000,
  mileageFrom: 0,
  mileageTo: 10000000,
};

const CatalogList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isFavoritePage = location.pathname.includes("favorite");
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState(initialFilters);
  const cars = useSelector(isFavoritePage ? selectFavorites : selectCars);

  useEffect(() => {
    if (isFavoritePage) return;
    dispatch(getCars(currentPage));
  }, [dispatch, currentPage, isFavoritePage]);

  const onClickLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const onSubmit = () => {
    dispatch(getAllCars());
  };

  const carToRender = applyFilters(cars, filters);

  return (
    <>
      {isFavoritePage ? null : (
        <Filter onSubmit={onSubmit} setFilter={setFilters} />
      )}
      {carToRender.length === 0 ? (
        isFavoritePage ? (
          <Message>You haven't any cars in your favorites list yet.</Message>
        ) : (
          <Message>
            Sorry, we did'nt found anything with this parameters
          </Message>
        )
      ) : null}
      <CarList>
        {carToRender?.map((car) => (
          <CatalogItem key={car.id} carInfo={car} />
        ))}
      </CarList>
      {isFavoritePage ||
      carToRender.length === 0 ||
      carToRender.length % 8 !== 0 ? null : (
        <LoadMoreButton onClick={onClickLoadMore} type="button">
          Load More
        </LoadMoreButton>
      )}
    </>
  );
};

export default CatalogList;
