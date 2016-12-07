import React from 'react';
import TestUtils from 'react-addons-test-utils';
const should = require('chai').should();

import List from '../list';

describe('List component', () => {
    it('Renders a list of cards.',  () => {
      const text = "Example text";
      const title = "Example title";
      const cards = [
        {
          text: "card 1"
        },
        {
          text: "card 2"
        }
      ];
      const renderer = TestUtils.createRenderer();
      renderer.render(<List title={title} 
                            cards={cards} 
                            text={text} />);

      const result = renderer.getRenderOutput();
      const cardsContainer = result.props.children[1];
      cardsContainer.props.className.should.equal('cards');
      // check that all cards are being rendered
      cardsContainer.props.children.length.should.equal(cards.length);
      result.props.className.should.equal('list');
    });
});