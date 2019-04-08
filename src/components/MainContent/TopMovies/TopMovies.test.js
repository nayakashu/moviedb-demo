import React from 'react';
import { shallow } from 'enzyme';
import { TopMovies } from './TopMovies';

describe('TopMovies', () => {
  const topMovies = shallow(<TopMovies />);

  it('renders correctly', () => {
    expect(topMovies).toMatchSnapshot();
  });
});
