import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../images/logoCap.png';
import Navbar from './Navbar';
import { fetchCountries, selectAllCountries } from '../redux/countries';
import CountryCard from './CountryCard';

const Homepage = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector(selectAllCountries);
  const [input, setInput] = useState('');
  useEffect(() => {
    if (allCountries.length === 0) {
      dispatch(fetchCountries());
    }
  }, [dispatch]);

  const filteredCountries = allCountries.filter(
    (
      country, //eslint-disable-line
    ) => country.countryName.toLowerCase().includes(input.toLowerCase()),
  );

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const filteredElements = filteredCountries.map((country) => (
    <CountryCard
      key={country.countryId}
      name={country.countryName}
      id={country.countryId}
      region={country.region}
      flagImage={country.flag}
      population={country.population}
    />
  ));

  return (
    <>
      <Navbar />
      <div>
        <div className="bg-glowing flex items-center justify-evenly py-4">
          <div className=" w-[60%]">
            <h1 className="text-lg pl-3 text-white">Search Country by Name</h1>
            <input
              type="text"
              value={input}
              onInput={handleChange}
              placeholder="Country Name"
              className="rounded-3xl py-1 pl-3 w-[100%] max-w-lg"
            />
          </div>
          <div className="sepia">
            <img src={logo} alt="" width="80px" />
          </div>
        </div>

        <ul className="country-ul grid grid-cols-1 sm:grid-cols-3  lg:grid-cols-5 w-full">
          {filteredElements}
        </ul>
      </div>
    </>
  );
};

export default Homepage;
