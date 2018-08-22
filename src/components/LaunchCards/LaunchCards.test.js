import React from 'react';
import { LaunchCards } from './LaunchCards';
import { shallow } from 'enzyme';

describe('LaunchCards', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<LaunchCards />);

    expect(wrapper).toMatchSnapshot();
  });
});