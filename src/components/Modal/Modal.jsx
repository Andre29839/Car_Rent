import { useEffect } from "react";
import { addressFormatting, formatMileage } from "utils/helpers";
import { ReactComponent as CloseBtn } from "images/svg/x.svg";
import {
  Backdrop,
  PositionedElement,
  ResponsiveDiv,
  SpanRental,
  StyledDiv,
  StyledDivDesc,
  StyledDivRental,
  StyledLink,
  StyledParagraph,
  StyledParagraphDesc,
  StyledParagraphRental,
} from "./Modal.styled";
import { createPortal } from "react-dom";

const modal = document.querySelector("#modal");

const Modal = ({ car, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "visible";
    };
  }, [closeModal]);

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeModal(null);
  };
  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <ResponsiveDiv>
        <PositionedElement onClick={() => closeModal(null)} type="button">
          <CloseBtn fill="#111" width={24} height={24} />
        </PositionedElement>
        <StyledDiv>
          <img src={car.img} alt={`${car.make} ${car.model}`} loading="lazy" />
        </StyledDiv>
        <StyledParagraph>
          {car.make}
          <SpanRental>&nbsp;{car.model}&nbsp;</SpanRental>
          {car.year}
        </StyledParagraph>
        <StyledDivDesc>
          <span>{addressFormatting(car.address).join("")}</span>
          <span>Id: {car.id}</span>
          <span>Year: {car.year}</span>
          <span>Type: {car.type}</span>
          <span>Fuel Consumption: {car.fuelConsumption}</span>
          <span>Engine Size: {car.engineSize}</span>
        </StyledDivDesc>
        <StyledParagraphDesc>{car.description}</StyledParagraphDesc>
        <StyledParagraphDesc>
          Accessories and functionalities:
        </StyledParagraphDesc>
        <StyledDivDesc>
          {car.accessories
            .slice(1, 3)
            .concat(car.functionalities.slice(1, 3))
            .map((el) => (
              <span key={el}>{el}</span>
            ))}
        </StyledDivDesc>
        <StyledParagraphRental>Rental Conditions:</StyledParagraphRental>
        <StyledDivRental>
          {car.rentalConditions.split("\n").map((el) => (
            <p key={el}>{el}</p>
          ))}
          <p>
            Mileage: <SpanRental>{formatMileage(car.mileage)}</SpanRental>
          </p>
          <p>
            Price: <SpanRental>{car.rentalPrice}</SpanRental>
          </p>
        </StyledDivRental>
        <StyledLink href="tel:+380730000000">Rental Car</StyledLink>
      </ResponsiveDiv>
    </Backdrop>,
    modal
  );
};

export default Modal;
