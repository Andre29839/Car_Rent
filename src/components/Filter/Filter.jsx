import carMake from 'carMake/carMake';
import Select from 'react-select';
import { generatePrices } from 'utils/helpers';

const Filter = ({ setFilter }) => {
  const onChange = e => {
    setFilter(prevState => ({
      ...prevState,
      [e.target.name]:
        e.target.name === 'make' ? e.target.value : +e.target.value,
    }));
  };

  return (
    <div>
      <div>
        <label>
          <Select
            name="make"
            placeholder="Enter the text"
            onChange={e => {
              onChange({ target: { value: e.value, name: 'make' } });
            }}
            option={carMake}
          />
        </label>
        <label>
          <Select
            name="rentalPrice"
            placeholder="To $"
            onChange={e => {
              onChange({ target: { value: e.value, name: 'rentalPrice' } });
            }}
            options={generatePrices().map(price => ({
              value: price,
              label: `$${price}`,
            }))}
          />
        </label>
      </div>
      <label>
        <input onChange={onChange} type="number" name="mileageFrom" />
      </label>
      <label>
        <input onChange={onChange} type="number" name="mileageTo" />
      </label>
    </div>
  );
};

export default Filter;
