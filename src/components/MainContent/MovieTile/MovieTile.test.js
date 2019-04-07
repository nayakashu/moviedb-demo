import React from 'react';
import { shallow } from 'enzyme';
import MovieTile from './MovieTile';

describe('MainContent', () => {
  const movieDetailsShort = { title: 'Short Title' };
  const movieDetailsLong = {
    title: 'This is a very very very long Title to test slicing function'
  };

  const movieTileNoDetails = shallow(<MovieTile />);
  const movieTile = shallow(<MovieTile movieDetails={movieDetailsShort} />);
  const movieTile1 = shallow(<MovieTile movieDetails={movieDetailsLong} />);

  it('renders correctly', () => {
    expect(movieTileNoDetails).toMatchSnapshot();
  });

  it('renders correctly', () => {
    expect(movieTile).toMatchSnapshot();
  });

  it('renders correctly', () => {
    expect(movieTile1).toMatchSnapshot();
  });
});
