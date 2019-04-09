import React from 'react';
import { mount } from 'enzyme';
import { AddMovieModal } from './AddMovieModal';

describe('AddMovieModal', () => {
  const props = {
    closeAddMovie: jest.fn(),
    showNotification: jest.fn(),
    addNewMovie: jest.fn()
  };

  const addMovieModal = mount(<AddMovieModal {...props} />);

  it('renders correctly', () => {
    expect(addMovieModal).toMatchSnapshot();
  });

  it('Simulate login functionality', () => {
    addMovieModal.find('.btn-login').simulate('click');
    expect(props.closeAddMovie).toHaveBeenCalled();
    expect(props.showNotification).toHaveBeenCalled();
    expect(props.addNewMovie).toHaveBeenCalled();
  });
});
