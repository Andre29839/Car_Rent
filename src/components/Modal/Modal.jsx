import { useEffect } from 'react';
import { ReactComponent as CloseBtn } from 'images/svg/x.svg';
import { addressFormatting } from 'utils/helpers';
import { createPortal } from 'react-dom';

const modal = document.querySelector('#modal');

const Modal = ({ car, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') closeModal(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [closeModal]);

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) closeModal(null);
  };

  return createPortal(
    <div onClick={onBackdropClick}>
      <div>
        <button onClick={() => closeModal(null)} type="button">
          <CloseBtn fill="#111" width={24} height={24} />
        </button>
        <div>
          <img src={car.img} alt={`${car.make} ${car.model}`} />
        </div>
        <p>
          {car.make}
          <span>&nbsp;{car.model}&nbsp;</span>
          {car.year}
        </p>
        <div>
          <span>{addressFormatting(car.address).join('')}</span>
          <span>Id: {car.id}</span>
          <span>Year: {car.year}</span>
          <span>Type: {car.type}</span>
          <span>Fuel Consumption: {car.fuelConsumption}</span>
          <span>Engine Size: {car.engineSize}</span>
        </div>
        <p>{car.descriprion}</p>
        <p>Accessories and functionalities: </p>
        <div>
          {car.accessories
            .slice(1, 3)
            .concat(car.functionalities.slice(1, 3))
            .map(e => (
              <span key={e}>{e}</span>
            ))}
        </div>
        <p>Rental Conditions:</p>
        <div>
          {car.rentalConditions.split('\n').map(e => (
            <p key={e}>{e}</p>
          ))}
          <p>
            Mileage: <span>{car.mileage}</span>
          </p>
          <p>
            Price: <span>{car.rentalPrice}</span>
          </p>
        </div>
        <a href="tel:+380730000000">Rental Car</a>
      </div>
    </div>,
    modal
  );
};

export default Modal;
