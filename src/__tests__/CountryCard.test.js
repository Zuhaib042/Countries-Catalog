import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import CountryCard from '../components/CountryCard';

describe('Navbar test', () => {
  const country = {
    countryId: '12345',
    countryName: 'New Zealand',
    region: 'Africa',
    flag: '',
    population: 456778,
  };
  it('should render header correctly', () => {
    const missionsPage = render(
      <Provider store={store}>
        <Router>
          <CountryCard
            key={country.countryId}
            name={country.countryName}
            id={country.countryId}
            region={country.region}
            flagImage={country.flag}
            population={country.population}
          />
        </Router>
      </Provider>,
    );
    expect(missionsPage).toMatchSnapshot();
  });
});
