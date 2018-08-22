import React from 'react';
import { HeaderLabels } from './HeaderLabels';
import { shallow } from 'enzyme';

describe('HeaderLabels', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HeaderLabels toggleDateSort={jest.fn()}/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleClick', () => {
    it('should set state to true when it is false', () => {
      wrapper.instance().handleClick()

      expect(wrapper.instance().state.sort).toEqual(true)
    })

    it('should set state to false when it is true', () => {
      wrapper.setState({sort: true})
      wrapper.instance().handleClick()

      expect(wrapper.instance().state.sort).toEqual(false)
    })
  })
});