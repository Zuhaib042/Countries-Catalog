import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Homepage from '../components/Homepage';

describe('Homepage test', () => {
  it('should render Homepagecorrectly', () => {
    const homepage = render(
      <Router>
        <Provider store={store}>
          <Homepage />
        </Provider>
      </Router>,
    );

    expect(homepage).toMatchSnapshot();
  });
});
