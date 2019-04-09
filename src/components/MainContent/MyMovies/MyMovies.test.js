import React from 'react';
import { shallow } from 'enzyme';
import { MyMovies } from './MyMovies';

describe('MyMovies', () => {
  const props = {
    fetchMyMovies: jest.fn(),
    closeLeftNav: jest.fn(),
    setActivePage: jest.fn()
  };

  const userMovies = [{ id: 1 }, { id: 2 }];

  const myMovies = shallow(<MyMovies {...props} userMovies={userMovies} />);
  const myMoviesNoMovies = shallow(<MyMovies {...props} />);

  it('renders correctly', () => {
    expect(myMovies).toMatchSnapshot();
  });

  it('renders correctly', () => {
    expect(myMoviesNoMovies).toMatchSnapshot();
  });
});
