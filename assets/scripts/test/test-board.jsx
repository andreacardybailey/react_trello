var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Board = require('../board');

describe('Board component', function() {
    it('Renders the board and its title.',  function() {
      var theBoard = {
      title: "Example title",
      lists: [
          {
            title: "To do"
          },
          {
            title: "In progress"
          },
          {
            title: "Completed"
          }
        ]
      };
      var renderer = TestUtils.createRenderer();
      renderer.render(<Board boardState={theBoard} />);
      var result = renderer.getRenderOutput();

      var theTitle = result.props.children[0];
      theTitle.type.should.equal('h1');
      theTitle.props.children.should.equal(theBoard.title);
      result.props.className.should.contain('board');
      result.props.children.length.should.equal(2);
      var listContainers = result.props.children[1];
      listContainers.length.should.equal(theBoard.lists.length);
    });
});