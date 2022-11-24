import axios from 'axios';

export const baseUrl = 'https://restcountries.com/v3.1/all';

const getCountriesData = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (err) {
    return err;
  }
};
export default getCountriesData;
