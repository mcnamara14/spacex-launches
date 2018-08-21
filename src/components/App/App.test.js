import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import { mockLaunchData } from '../../__mocks__/mockLaunchData';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockLaunchData)
    }));
    
    wrapper = shallow(<App />);

    wrapper.instance().cleanLaunchData = jest.fn();
    wrapper.instance().storeLaunches = jest.fn();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('fetchLaunches', () => {
    it('should fetch with the correct argument', async () => {
      const expectedUrl = `https://api.spacexdata.com/v2/launches`
  
      await wrapper.instance().fetchLaunches();
  
      expect(window.fetch).toHaveBeenCalledWith(expectedUrl)
    });
  })

    it('should call cleanLaunchData with correct data', async () => {
      const expected = mockLaunchData;

      await wrapper.instance().fetchLaunches();

      expect(wrapper.instance().cleanLaunchData).toHaveBeenCalledWith(expected)
    });
});