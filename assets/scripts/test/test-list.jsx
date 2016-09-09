var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var List = require('../list');

describe('List component', function() {
    it('Renders a list of cards.',  function() {
        var text = "Example text";
        var title = "Example title";
        var cards = [
          {
            text: "card 1"
          },
          {
            text: "card 2"
          }
        ];
        var renderer = TestUtils.createRenderer();
        renderer.render(<List title={title} 
                              cards={cards} 
                              text={text} />);

        var result = renderer.getRenderOutput();
        var cardsContainer = result.props.children[1];
        cardsContainer.props.className.should.equal('cards');
        // check that all cards are being rendered
        cardsContainer.props.children.length.should.equal(cards.length);
        result.props.className.should.equal('list');
    });
});