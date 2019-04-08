import React from 'react';
import { shallow } from 'enzyme';
import { AddMovieModal } from './AddMovieModal';

describe('AddMovieModal', () => {
  const addMovieModal = shallow(<AddMovieModal />);

  it('renders correctly', () => {
    expect(addMovieModal).toMatchSnapshot();
  });
});
