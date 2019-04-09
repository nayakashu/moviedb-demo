import React from 'react';
import { shallow } from 'enzyme';
import { MovieTile } from './MovieTile';

describe('MainContent', () => {
  const movieDetailsShort = { title: 'Short Title' };
  const movieDetailsLong = {
    title: 'This is a very very very long Title to test slicing function'
  };

  const movieTileNoDetails = shallow(<MovieTile />);

  const props = {
    addNewMovie: jest.fn(),
    showNotification: jest.fn(),
    deleteMovie: jest.fn()
  };

  const movieTile = shallow(
    <MovieTile movieDetails={movieDetailsShort} {...props} />
  );
  movieTile.find('.btn-like').simulate('click');

  const movieTile1 = shallow(<MovieTile movieDetails={movieDetailsLong} />);

  it('renders correctly - movie with no details', () => {
    expect(movieTileNoDetails).toMatchSnapshot();
  });

  it('renders correctly', () => {
    expect(movieTile).toMatchSnapshot();
  });

  it('renders correctly', () => {
    expect(movieTile1).toMatchSnapshot();
  });

  // Test delete movie from library functionality
  const movieTileDelete = shallow(
    <MovieTile movieDetails={movieDetailsLong} {...props} editable={true} />
  );
  it('renders correctly', () => {
    expect(movieTileDelete).toMatchSnapshot();
  });
  movieTileDelete.find('.ellipsis').simulate('click');

  const movieTileDelete2 = shallow(
    <MovieTile movieDetails={movieDetailsLong} {...props} isAdded={true} />
  );
  it('renders correctly', () => {
    expect(movieTileDelete2).toMatchSnapshot();
  });
  movieTileDelete2.find('.btn-like').simulate('click');
});
