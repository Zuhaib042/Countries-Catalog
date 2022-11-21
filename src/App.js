import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/countrydetails/:id" element={<CountryDetails />} />
        <h1 className="text-3xl text-red-400 font-bold underline">
          Hello world!
        </h1>
      </Routes>
    </>
  );
}

export default App;
