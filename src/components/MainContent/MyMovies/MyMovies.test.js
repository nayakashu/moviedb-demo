import React from 'react';
import { shallow } from 'enzyme';
import { MyMovies } from './MyMovies';

describe('MyMovies', () => {
  const props = {
    fetchMyMovies: () => {},
    closeLeftNav: () => {},
    setActivePage: () => {}
  };
  const myMovies = shallow(<MyMovies {...props} />);

  it('renders correctly', () => {
    expect(myMovies).toMatchSnapshot();
  });
});
