import { useEffect, useState } from 'react';
import { getCar } from 'utils/mockapi';
import CatalogItem from 'components/CatalogItem/CatalogItem';

const Catalog = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getCar();
      setCars(response);
    })();
  }, []);

  return (
    <ul>
      {cars?.map(car => (
        <CatalogItem key={car.id} carInfo={car} />
      ))}
    </ul>
  );
};

export default Catalog;
