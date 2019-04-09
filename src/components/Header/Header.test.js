import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header', () => {
  const header = shallow(<Header />);
  const header1 = shallow(
    <Header activePage="#/mymovies" isUserLoggedIn={true} />
  );

  it('renders correctly', () => {
    expect(header).toMatchSnapshot();
  });

  it('simulating Login button click', () => {
    header.find('.btn-login').simulate('click');
    expect(header).toMatchSnapshot();
  });

  it('is page active & is user logged in', () => {
    expect(header1).toMatchSnapshot();
  });
});
