import React from 'react';
import { shallow } from 'enzyme';
import { TopMovies } from './TopMovies';

describe('TopMovies', () => {
  const props = {
    closeLeftNav: () => {},
    setActivePage: () => {},
    topMovies: [{ id: 1 }, { id: 2 }]
  };

  const topMovies = shallow(<TopMovies {...props} />);

  it('renders correctly', () => {
    expect(topMovies).toMatchSnapshot();
  });
});
