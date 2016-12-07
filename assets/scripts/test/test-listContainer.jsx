import React from 'react';
import TestUtils from 'react-addons-test-utils';
const should = require('chai').should();

import ListContainer from '../listContainer';

describe('ListContainer component', () => {
    it('Renders a list.',  () => {
      const testList = {
        title: "Test title"
      };
      
      const renderer = TestUtils.createRenderer();
      renderer.render(<ListContainer title={testList.title} />);

      const result = renderer.getRenderOutput();
      const resultType = typeof(result.type);
      resultType.should.equal('function');
      result.props.title.should.equal('Test title');
    });
});