import React from 'react';
import LaunchCard from './LaunchCard';
import { shallow } from 'enzyme';

describe('LaunchCard', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<LaunchCard />);

    expect(wrapper).toMatchSnapshot();
  });
});