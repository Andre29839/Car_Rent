import { useEffect, useState } from "react";
import Select from "react-select";
import { useMediaQuery } from "react-responsive";
import { generatePricesArr } from "utils/helpers";
import make from "make/make";
import { ReactComponent as ArrowUp } from "images/svg/arrowUp.svg";
import { ReactComponent as ArrowDown } from "images/svg/arrowDown.svg";
import {
  customPriceSelectStyles,
  customMakeSelectStyles,
} from "./CustomSelectStyles";
import {
  Button,
  DivLable,
  Input,
  InputSecond,
  Label,
  StyledButton,
  StyledDiv,
  StyledForm,
  Text,
} from "./Filter.styled";

const Filter = ({ setFilter, onSubmit }) => {
  const [isDisplaySearch, setDisplaySearch] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 767.9px)" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { make, mileageFrom, mileageTo, rentalPrice } = e.target.elements;
    const filters = {
      make: make.value || "",
      rentalPrice: +rentalPrice.value || 100000,
      mileageFrom: +mileageFrom.value || 0,
      mileageTo: +mileageTo.value || 100000,
    };
    setFilter(filters);
    onSubmit();
  };

  const onClickSearch = () => {
    setDisplaySearch(!isDisplaySearch);
  };

  useEffect(() => {
    if (!isMobile && isDisplaySearch) {
      setDisplaySearch(false);
    }
  }, [isMobile, isDisplaySearch]);

  return (
    <>
      <StyledButton onClick={onClickSearch} type="button">
        {isDisplaySearch ? "Close filters" : "Open filters"}
        {isDisplaySearch ? (
          <ArrowUp width={20} height={20} />
        ) : (
          <ArrowDown width={20} height={20} />
        )}
      </StyledButton>
      <StyledForm $isDisplaySearch={isDisplaySearch} onSubmit={handleSubmit}>
        <StyledDiv>
          <Label>
            <Text>Car brand</Text>
            <Select
              name="make"
              placeholder="Enter the text"
              options={make}
              styles={customMakeSelectStyles}
            />
          </Label>
          <Label>
            <Text>Price/ 1 hour</Text>
            <Select
              name="rentalPrice"
              placeholder="To $"
              options={generatePricesArr().map((price) => ({
                value: price,
                label: `$${price}`,
              }))}
              styles={customPriceSelectStyles}
            />
          </Label>
        </StyledDiv>
        <div>
          <Text>Сar mileage / km</Text>
          <DivLable>
            <label>
              <Input type="number" name="mileageFrom" placeholder="From" />
            </label>
            <label>
              <InputSecond type="number" name="mileageTo" placeholder="To" />
            </label>
          </DivLable>
        </div>
        <Button type="submit">Search</Button>
      </StyledForm>
    </>
  );
};

export default Filter;
