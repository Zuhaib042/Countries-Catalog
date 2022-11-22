import React from 'react';
import logo from '../images/logoCap.png';

const Homepage = () => {
  return (
    <>
      <div className="bg-glowing flex items-center justify-evenly py-4">
        <div>
          <h1 className="text-lg text-white">Search Country by Name</h1>
          <input type="text" className="rounded-xl py-1 w-96" />
        </div>
        <div className="sepia">
          <img src={logo} alt="" width="80px" />
        </div>
      </div>
      <div>Homepage</div>
    </>
  );
};

export default Homepage;
