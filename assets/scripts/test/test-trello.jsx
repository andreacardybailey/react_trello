var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Trello = require('../trello');

describe('Trello component', function() {
    it('Renders the Trello Board.',  function() {
      
      var renderer = TestUtils.createRenderer();
      renderer.render(<Trello />);

      var result = renderer.getRenderOutput();
      var resultType = typeof(result.type);
      resultType.should.equal('function');
    });
});