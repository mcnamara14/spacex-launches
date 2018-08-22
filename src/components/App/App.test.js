import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import { mockLaunchData, cleanMockLaunchData } from '../../__mocks__/mockLaunchData';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockLaunchData)
    }));
    
    wrapper = shallow(<App />, { disableLifecycleMethods: true });

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

    it('should call cleanLaunchData with correct data', async () => {
      const expected = mockLaunchData;

      await wrapper.instance().fetchLaunches();

      expect(wrapper.instance().cleanLaunchData).toHaveBeenCalledWith(expected)
    });
  })

  describe('cleanLaunchData', () => {
    it('should clean raw launch data', () => {
      wrapper = shallow(<App />, { disableLifecycleMethods: true });

      const result = wrapper.instance().cleanLaunchData(mockLaunchData);
  
      expect(result).toEqual(cleanMockLaunchData)
    })
  })

  describe('storeLaunches', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App clearLaunches={jest.fn()} storeLaunches={jest.fn()}/>, { disableLifecycleMethods: true });
      wrapper.instance().storeLaunches(cleanMockLaunchData);
    });

    it('should call clearLaunches in props', () => {
      expect(wrapper.instance().props.clearLaunches).toHaveBeenCalled()
    })

    it('should call storeLaunches with correct args', () => {
      const expected = (
        [
          "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png", 
          "Falcon 2", 
          "Merlin B", 
          "03/24/2008", 
          "Engine failure at 33 seconds and loss of vehicle", 
          2, "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html", 
          false, 
          true, 
          false], 
          [
            "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png", 
            "Falcon 1", 
            "Merlin A", 
            "03/24/2006", 
            "Engine failure at 33 seconds and loss of vehicle", 
            1, "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html", 
            false, 
            false, 
            false]
      )
      expect(wrapper.instance().props.storeLaunches).toHaveBeenCalledWith(...expected)
    })
  })
});