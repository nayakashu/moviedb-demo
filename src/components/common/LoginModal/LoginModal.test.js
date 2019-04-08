import React from 'react';
import { shallow } from 'enzyme';
import { LoginModal } from './LoginModal';

describe('LoginModal', () => {
  const loginModal = shallow(<LoginModal />);

  it('renders correctly', () => {
    expect(loginModal).toMatchSnapshot();
  });
});
