import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';
// import {FaChevronLeft} from 'react-icons/fa';
// import { BsArrowRightCircle } from 'react-icons/bs';
const Navbar = () => {
  return (
    <div className="bg-light text-white py-4 flex items-center justify-between">
      <p className="text-2xl ml-2 md:ml-8">2022</p>
      <p className="text-white font-bold text-2xl">Countries Catalogue</p>
      <div className="flex text-lg gap-2 mr-2 md:mr-8">
        <FaMicrophone />
        <BsFillGearFill />
      </div>
    </div>
  );
};

export default Navbar;
