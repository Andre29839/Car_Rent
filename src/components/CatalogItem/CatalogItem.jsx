import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addressFormatting } from "utils/helpers";
import { selectFavorites } from "redux/selectors";
import {
  addCarToFavorites,
  removeCarFromFavorites,
} from "redux/favorite/favoriteOperation";

import Modal from "components/Modal/Modal";
import {
  HeartIcon,
  ImageContainer,
  InfoContainer,
  LearnMoreButton,
  ListItem,
  StyledButton,
  StyledImg,
  Text,
  TextContainer,
} from "./CatalogItem.styled";

const CatalogItem = ({ carInfo }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [modalCar, setModalCar] = useState(null);

  const isInFavorites = (id) => {
    return favorites.map((el) => el.id).includes(id);
  };

  const onLearnMoreClick = (car) => setModalCar(car);

  const onAddClick = (car) => {
    if (isInFavorites(car.id)) return dispatch(removeCarFromFavorites(car.id));
    else dispatch(addCarToFavorites(car));
  };

  return (
    <>
      {modalCar ? <Modal car={modalCar} closeModal={setModalCar} /> : null}
      <ListItem>
        <ImageContainer>
          <StyledImg
            src={carInfo.img}
            alt={`${carInfo.make} ${carInfo.model}`}
            loading="lazy"
          />
          <StyledButton onClick={() => onAddClick(carInfo)} type="button">
            <HeartIcon
              className={
                isInFavorites(carInfo.id) ? "favorite" : "not-favorite"
              }
            />
          </StyledButton>
        </ImageContainer>
        <TextContainer>
          <p>
            {carInfo.make}&nbsp;
            <Text>{carInfo.model}</Text>,&nbsp;
            {carInfo.year}
          </p>
          <p>{carInfo.rentalPrice}</p>
        </TextContainer>
        <InfoContainer>
          <span>{addressFormatting(carInfo.address).join("")}</span>
          <span>{carInfo.rentalCompany}</span>
          {carInfo.accessories.map((el) => (
            <span key={el}>{el}</span>
          ))}
        </InfoContainer>
        <LearnMoreButton
          onClick={() => onLearnMoreClick(carInfo)}
          type="button"
        >
          Learn More
        </LearnMoreButton>
      </ListItem>
    </>
  );
};

export default CatalogItem;
