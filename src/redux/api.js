import axios from 'axios';
// import { nanoid } from '@reduxjs/toolkit';

export const baseUrl = 'https://restcountries.com/v3.1/all';

const getCountriesData = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
    // const res = countries.map((elem) => ({
    //   countryId: nanoid(),
    //   countryName: elem.name.common,
    //   region: elem.region,
    //   lat: elem.latlng[0],
    //   long: elem.latlng[1],
    //   continents: elem.continents,
    //   carSide: elem.car.side,
    //   coatOfArms: elem.coatOfArms.png,
    //   capital: elem.capital,
    //   capitalLocation: elem.capitalInfo.latlng,
    //   langugage: elem.languages,
    //   subregion: elem.subregion,
    //   currency: elem.currencies,
    //   timezones: elem.timezones,
    //   area: elem.area,
    //   flagSmall: elem.flag,
    //   population: elem.population,
    //   flag: elem.flags.png,
    // }));
  } catch (err) {
    return err;
  }
};
export default getCountriesData;
