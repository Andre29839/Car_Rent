import Select from 'react-select';
import { useState } from 'react';
import carMake from 'carMake/carMake';
import { generatePrices } from 'utils/helpers';
import { ReactComponent as ArrowUp } from 'images/svg/arrowUp.svg';
import { ReactComponent as ArrowDown } from 'images/svg/arrowDown.svg';
import {
  customMakeSelectStyles,
  customPriceSelectStyles,
} from './Filter.styled';

const Filter = ({ setFilter, onSubmit }) => {
  const [isDisplaySearch, setIsDisplaySearch] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const { make, mileageFrom, mileageTo, rentalPrice } = e.target.elements;

    const filters = {
      make: make.value || '',
      rentalPrice: +rentalPrice.value || 100000,
      mileageFrom: +mileageFrom.value || 0,
      mileageTo: +mileageTo.value || 100000,
    };
    setFilter(filters);
    onSubmit();
  };

  const onClickSearch = () => {
    setIsDisplaySearch(!isDisplaySearch);
  };

  return (
    <>
      <button onClick={onClickSearch} type="button">
        {isDisplaySearch ? 'Close filters' : 'Open filters'}
        {isDisplaySearch ? (
          <ArrowUp width={20} height={20} />
        ) : (
          <ArrowDown width={20} height={20} />
        )}
      </button>
      <form
        className={`${
          isDisplaySearch
            ? 'flex flex-col items-center px-[25px] gap-y-[8px] pb-[10px]'
            : 'hidden'
        }  md:flex gap-[14px] xl:gap-[18px] max-w-[570px] xl:max-w-[860px] mx-auto mb-[50px]`}
        onSubmit={handleSubmit}
      >
        <div>
          <label>
            <Select
              name="make"
              placeholder="Enter the text"
              option={carMake}
              styles={customMakeSelectStyles}
            />
          </label>
          <label>
            <Select
              name="rentalPrice"
              placeholder="To $"
              options={generatePrices().map(price => ({
                value: price,
                label: `$${price}`,
              }))}
              styles={customPriceSelectStyles}
            />
          </label>
        </div>
        <div>
          <label>
            <input placeholder="From" type="number" name="mileageFrom" />
          </label>
          <label>
            <input placeholder="To" type="number" name="mileageTo" />
          </label>
        </div>
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Filter;
