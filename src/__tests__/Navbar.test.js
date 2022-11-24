import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar test', () => {
  it('should render header correctly', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    const countriesTag = screen.getByText(/countries/i);
    expect(countriesTag).toMatchSnapshot();
  });
});
