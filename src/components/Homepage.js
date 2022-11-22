import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../images/logoCap.png';
import Navbar from './Navbar';
import { fetchCountries, selectAllCountries } from '../redux/countries';
import CountryCard from './CountryCard';

const Homepage = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector(selectAllCountries);
  useEffect(() => {
    if (allCountries.length === 0) {
      dispatch(fetchCountries());
    }
  }, [dispatch]);
  const countryElements = allCountries.map((country) => (
    <CountryCard
      key={country.countryId}
      name={country.countryName}
      id={country.countryId}
      region={country.region}
      flagImage={country.flag}
      population={country.population}
      area={country.area}
      subregion={country.subregion}
      continent={country.continent}
      language={country.language}
      lat={country.lat}
      long={country.long}
      carside={country.carside}
      coatOfArms={country.coatOfArms}
      currency={country.currency}
      timezones={country.timezones}
    />
  ));
  return (
    <>
      <Navbar />
      <div>
        <div className="bg-glowing flex items-center justify-evenly py-4">
          <div>
            <h1 className="text-lg text-white">Search Country by Name</h1>
            <input type="text" className="rounded-xl py-1 w-96" />
          </div>
          <div className="sepia">
            <img src={logo} alt="" width="80px" />
          </div>
        </div>

        <ul className="country-ul grid grid-cols-1 sm:grid-cols-3  lg:grid-cols-5 w-full">
          {countryElements}
        </ul>
      </div>
    </>
  );
};

export default Homepage;
