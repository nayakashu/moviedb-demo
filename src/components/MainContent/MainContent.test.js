import React from 'react';
import { shallow } from 'enzyme';
import MainContent from './MainContent';

describe('MainContent', () => {
  const mainContent = shallow(<MainContent />);

  it('renders correctly', () => {
    expect(mainContent).toMatchSnapshot();
  });
});
