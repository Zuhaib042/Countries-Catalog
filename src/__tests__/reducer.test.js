import countries from '../redux/countries';

const mockStore = {
  countries: [
    {
      id: 'ascbjsacbajs',
      name: 'Pakistan',
      image: '',
      population: 220000000,
      area: 796000,
    },
  ],
};

describe('countries reducer', () => {
  it('should test the countries reducer with mocked store', () => {
    const action = {
      type: 'fetchcountries/getData',
      payload: {
        id: 'ascbjsacbajs',
        name: 'Pakistan',
        image: '',
        population: 220000000,
        area: 796000,
      },
    };
    expect(countries(mockStore.countries, action)).toEqual([
      {
        id: 'ascbjsacbajs',
        name: 'Pakistan',
        image: '',
        population: 220000000,
        area: 796000,
      },
    ]);
  });
});
