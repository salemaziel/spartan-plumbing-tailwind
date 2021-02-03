import React from 'react';
import renderer from 'react-test-renderer';

import s1Hero3 from ',';

describe('<s1Hero3 />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<s1Hero3 />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });