import React from 'react';
import { shallow } from 'enzyme';
import { Notification } from './Notification';

describe('Notification', () => {
  const notification = shallow(<Notification />);

  it('renders correctly', () => {
    expect(notification).toMatchSnapshot();
  });
});
