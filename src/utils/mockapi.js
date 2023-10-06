import axios from 'axios';

const PER_PAGE = 8;

const instance = axios.create({
  baseURL: 'https://651fcf24906e276284c38b27.mockapi.io/api/car/car',
});

export const getCars = async (page = 1) => {
  instance.defaults.params = {
    page,
    limit: PER_PAGE,
  };

  const response = await instance.get();
  return response.data;
};
