import axios from 'axios';

const PER_PAGE = 8;

const instance = axios.create({
  baseURL: 'https://651fcf24906e276284c38b27.mockapi.io/api/car/car',
});

export const fetchCars = async (page = 1) => {
  instance.defaults.params = {
    page,
    limit: PER_PAGE,
  };

  const { data } = await instance.get();
  instance.defaults.params = {};
  return data;
};

export const getCar = async id => {
  const { data } = await instance.get(`/${id}`);
  return data;
};

export const fetchAllCars = async () => {
  const { data } = await instance.get();
  return data;
};

export default instance;
