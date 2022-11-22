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
      </Routes>
    </>
  );
}

export default App;
