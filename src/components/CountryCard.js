import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const CountryCard = ({ id, name, region, flagImage, population }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/countrydetails/${id}`);
  };

  const convertNumber = (labelValue) => {
    if (Math.abs(Number(labelValue)) >= 1.0e9) {
      return `${(Math.abs(Number(labelValue)) / 1.0e9).toFixed(2)}B`;
    }
    if (Math.abs(Number(labelValue)) >= 1.0e6) {
      return `${(Math.abs(Number(labelValue)) / 1.0e6).toFixed(2)}M`;
    }
    if (Math.abs(Number(labelValue)) >= 1.0e3) {
      return `${(Math.abs(Number(labelValue)) / 1.0e3).toFixed(2)}K`;
    }
    return Math.abs(Number(labelValue));
  };
  const refined = convertNumber(population);

  return (
    <li className="col-span-1 bg-light p-3 text-white">
      <div className="flex justify-between">
        <div>
          <p className="text-2xl py-1">{name}</p>
          <p className="font-bold">{region}</p>
        </div>
        <div className="w-24 h-24">
          <img src={flagImage} width="100%" height="100%" alt="country-flag" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="mt-5">
          <span className=""> Population: </span>
          <span className="text-2xl font-bold">{refined}</span>
        </p>
        <button onClick={handleClick} type="button" className="text-2xl">
          <BsArrowRightCircle />
        </button>
      </div>
    </li>
  );
};

CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  flagImage: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
};

export default CountryCard;
