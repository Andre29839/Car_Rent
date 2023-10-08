export const addressFormatting = address => {
  const array = address.split(',');
  array.splice(0, 1);

  return array;
};

export const generatePrices = (maxPrice = 150) => {
  const result = [];

  for (let i = 0; i <= maxPrice; i += 10) {
    result.push(i);
  }
  return result;
};

export const applyFilter = (cars, filters) => {
  const filterValue = Object.entries(filters);
  return cars.filter(car => {
    return (
      car[filterValue[0][0]].includes(filterValue[0][1]) &&
      parseFloat(car[filterValue[1][0]].replace('$', '')) <=
        filterValue[1][1] &&
      car.mileage >= filterValue[2][1] &&
      car.mileage <= filterValue[3][1]
    );
  });
};
