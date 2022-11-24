import React from 'react';
import { FaChevronLeft, FaMicrophone } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { selectAllCountries } from '../redux/countries';

const CountryDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const countries = useSelector(selectAllCountries);

  const country = countries.filter((obj) => obj.countryId === id);
  const country2 = country[0];

  console.log(country2);

  return (
    <div>
      <div className="flex justify-between py-4 items-center text-white bg-glowing">
        <button type="button" onClick={() => navigate('/')}>
          <FaChevronLeft />
        </button>
        <div className="flex flex-col items-center">
          <p className="font-light">General Information and Statistics</p>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">{country2.countryName}</h2>

            <img src={country2.coatOfArms} width="50px" alt="coat of arms" />
          </div>
        </div>
        <div className="flex text-lg gap-2 mr-2 md:mr-8">
          <FaMicrophone />
          <BsFillGearFill />
        </div>
      </div>
      <ul className="details-ul text-white text-xl">
        <li className="flex justify-between px-3 py-5">
          <span>Continent:</span>
          <span>{country2.continents[0]}</span>
        </li>
        <li className="flex justify-between px-3 py-5">
          <span>Sub Region:</span>
          <span>{country2.subregion}</span>
        </li>
        <li className="flex justify-between px-3 py-5">
          <span>Capital:</span>
          <span>{country2.capital}</span>
        </li>
        <li className="flex justify-between px-3 py-5">
          <span>Capital Location:</span>
          <span>{`Lat:${country2.capitalLocation[0]}, Long:${country2.capitalLocation[1]}`}</span>
        </li>
        <li className="flex justify-between px-3 py-5">
          <span>Area:</span>
          <span>{`${country2.area} sq km`}</span>
        </li>
        <li className="flex justify-between px-3 py-5">
          <span>Latitude:</span>
          <span>{country2.lat}</span>
        </li>
        <li className="flex justify-between px-3 py-5">
          <span>Longitude:</span>
          <span>{country2.long}</span>
        </li>
        <li className="flex justify-between px-3 py-5">
          <span>Flag:</span>
          <span>{country2.flagSmall}</span>
        </li>
        <li className="flex justify-between px-3 py-5">
          <span>Time Zone:</span>
          <span>{country2.timezones.join(', ')}</span>
        </li>
        <li className="flex justify-between px-3 py-5">
          <span>Car Side:</span>
          <span>{country2.carSide}</span>
        </li>
        {/* <li className="flex justify-between px-3 py-4">
          <span>Car Side:</span>
          <span></span>
        </li> */}
      </ul>
    </div>
  );
};

// CountryDetails.propTypes = {
//   name: PropTypes.string.isRequired,
//     unid: PropTypes.string.isRequired,
//   region: PropTypes.string.isRequired,
//   flagImage: PropTypes.string.isRequired,
//   population: PropTypes.number.isRequired,
// };

export default CountryDetails;
