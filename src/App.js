import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/countrydetails/:id" element={<CountryDetails />} />
      </Routes>
    </>
  );
}

export default App;
