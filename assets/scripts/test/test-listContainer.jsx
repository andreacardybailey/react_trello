var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var ListContainer = require('../listContainer');

describe('ListContainer component', function() {
    it('Renders a list.',  function() {
      var testList = {
        title: "Test title"
      };
      
      var renderer = TestUtils.createRenderer();
      renderer.render(<ListContainer title={testList.title} />);

      var result = renderer.getRenderOutput();
      var resultType = typeof(result.type);
      resultType.should.equal('function');
      result.props.title.should.equal('Test title');
    });
});