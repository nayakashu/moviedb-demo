import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('Loader', () => {
  const loader = shallow(<Loader />);

  it('renders correctly', () => {
    expect(loader).toMatchSnapshot();
  });
});
