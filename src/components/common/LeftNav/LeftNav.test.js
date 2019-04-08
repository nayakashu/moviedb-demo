import React from 'react';
import { shallow } from 'enzyme';
import { LeftNav } from './LeftNav';

describe('LeftNav', () => {
  const leftNav = shallow(<LeftNav />);

  it('renders correctly', () => {
    expect(leftNav).toMatchSnapshot();
  });
});
