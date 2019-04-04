import React from 'react';
import { shallow } from 'enzyme';
import MovieTile from './MovieTile';

describe('MainContent', () => {
  const movieTile = shallow(<MovieTile />);

  it('renders correctly', () => {
    expect(movieTile).toMatchSnapshot();
  });
});
