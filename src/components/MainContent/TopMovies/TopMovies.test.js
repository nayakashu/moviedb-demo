import React from 'react';
import { shallow } from 'enzyme';
import { TopMovies } from './TopMovies';

describe('TopMovies', () => {
  const props = {
    closeLeftNav: () => {},
    setActivePage: () => {}
  };

  const topMovies = shallow(<TopMovies {...props} />);

  it('renders correctly', () => {
    expect(topMovies).toMatchSnapshot();
  });
});
