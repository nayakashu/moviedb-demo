import React from 'react';
import { mount } from 'enzyme';
import { LoginModal } from './LoginModal';

describe('LoginModal', () => {
  const props = {
    setUserLogin: jest.fn(),
    closeLoginForm: jest.fn()
  };

  const loginModal = mount(<LoginModal {...props} />);

  it('renders correctly', () => {
    expect(loginModal).toMatchSnapshot();
  });

  it('Simulate login functionality', () => {
    loginModal.find('.btn-login').simulate('click');
    expect(props.setUserLogin).toHaveBeenCalled();
    expect(props.closeLoginForm).toHaveBeenCalled();
  });
});
