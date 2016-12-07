import React from 'react';
import TestUtils from 'react-addons-test-utils';
const should = require('chai').should();

import Trello from '../trello';

describe('Trello component', () => {
    it('Renders the Trello Board.',  () => {
      
      const renderer = TestUtils.createRenderer();
      renderer.render(<Trello />);

      const result = renderer.getRenderOutput();
      const resultType = typeof(result.type);
      resultType.should.equal('function');
    });
});