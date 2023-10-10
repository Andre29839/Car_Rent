import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetCarsStore } from "redux/cars/carsOperations";
import CatalogList from "components/CatalogList/CatalogList";

const Favorites = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCarsStore());
  });

  return (
    <>
      <CatalogList isFavorite={true} />
    </>
  );
};

export default Favorites;
