import Catalog from 'components/Catalog/Catalog';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCarToFavorites,
  removeCarFromFavorites,
} from 'redux/favorite/favoriteOperation';
import { selectFavorites } from 'redux/selectors';
import { ReactComponent as Heart } from 'images/svg/heart.svg';
import { addressFormatting } from 'utils/helpers';

const CatalogItem = ({ carInfo }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [modal, setModal] = useState(null);

  const isInFavorite = id => {
    return favorites.map(e => e.id).includes(id);
  };

  const onClickLearnMore = car => setModal(car);

  const onAddClick = car => {
    if (isInFavorite(car.id)) return dispatch(removeCarFromFavorites(car.id));
    else dispatch(addCarToFavorites(car));
  };

  return (
    <>
      {modal ? <Catalog car={modal} closeModal={setModal} /> : null}
      <li>
        <div>
          <img src={carInfo.img} alt={`${carInfo.make} ${carInfo.model}`} />
          <button onClick={() => onAddClick(carInfo)} type="button">
            <Heart
              className={`w-[18px] h-[18px] ${
                isInFavorite(carInfo.id)
                  ? 'fill-btn-primary [&>g>path]:stroke-transparent'
                  : ''
              }`}
            />
          </button>
        </div>
        <div>
          <p>
            {carInfo.male}&nbsp
            <span>{carInfo.model}</span>&nbsp
            {carInfo.year}
          </p>
          <p>{carInfo.rentalPrice}</p>
        </div>
        <div>
          <span>{addressFormatting(carInfo.address).join('')}</span>
          <span>{carInfo.rentalCompany}</span>
          {carInfo.accessories.map(e => (
            <span key={e}>{e}</span>
          ))}
        </div>
        <button onClick={() => onClickLearnMore(carInfo)} type="button">
          Learn More
        </button>
      </li>
    </>
  );
};

export default CatalogItem;
