import React from 'react';
import TestUtils from 'react-addons-test-utils';
const should = require('chai').should();

import Board from '../board';

describe('Board component', () => {
    it('Renders the board and its title.',  () => {
      const theBoard = {
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
      const renderer = TestUtils.createRenderer();
      renderer.render(<Board boardState={theBoard} />);
      const result = renderer.getRenderOutput();

      const theTitle = result.props.children[0];
      theTitle.type.should.equal('h1');
      theTitle.props.children.should.equal(theBoard.title);
      result.props.className.should.contain('board');
      result.props.children.length.should.equal(2);
      const listContainers = result.props.children[1];
      listContainers.length.should.equal(theBoard.lists.length);
    });
});