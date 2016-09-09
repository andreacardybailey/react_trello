var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../card');

describe('Card component', function() {
    it('Renders a card',  function() {
        var text = "Example text";

        var renderer = TestUtils.createRenderer();
        renderer.render(<Card text={text} />);

        var result = renderer.getRenderOutput();
        
        result.props.className.should.equal('card');
        result.props.children.should.equal(text);
    });
});