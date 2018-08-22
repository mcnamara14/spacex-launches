import React from 'react';
import { HeaderFilters } from './HeaderFilters';
import { shallow } from 'enzyme';
import { cleanMockLaunchData } from '../../__mocks__/mockLaunchData';

describe('HeaderFilters', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HeaderFilters 
      clearFilteredLaunchIds={jest.fn()} 
      storeFilteredLaunchIds={jest.fn()}
      launches={cleanMockLaunchData}/> );
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('toggleFilter', () => {
    beforeEach(() => {
      wrapper.instance().filterLaunches = jest.fn();
    })

    it('should add filter to state when not included already', () => {
      wrapper.setState({filters: ['reused']})

      expect(wrapper.state().filters).toEqual(['reused'])

      wrapper.instance().toggleFilter('reddit')

      expect(wrapper.state().filters).toEqual(['reused', 'reddit'])
    })

    it('should remove filter from state when it is included already', () => {
      wrapper.setState({filters: ['reused', 'reddit']})

      expect(wrapper.state().filters).toEqual(['reused', 'reddit'])

      wrapper.instance().toggleFilter('reddit')

      expect(wrapper.state().filters).toEqual(['reused'])
    })
  })

  describe('filterLaunches', () => {
    it('should store all launches if there are no filters', () => {
      wrapper.instance().filterLaunches()

      expect(wrapper.instance().props.storeFilteredLaunchIds).toHaveBeenCalledTimes(2)
    }) 

    it('should store only launches matching filters', () => {
      wrapper.setState({filters: ['reused']})
      wrapper.instance().filterLaunches()

      expect(wrapper.instance().props.storeFilteredLaunchIds).toHaveBeenCalledTimes(1)
    }) 
  })
});