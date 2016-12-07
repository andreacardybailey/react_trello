import React from 'react';
import TestUtils from 'react-addons-test-utils';
const should = require('chai').should();

import Card from '../card';

describe('Card component', () => {
    it('Renders a card',  () => {
        const text = "Example text";

        const renderer = TestUtils.createRenderer();
        renderer.render(<Card text={text} />);

        const result = renderer.getRenderOutput();
        
        result.props.className.should.equal('card');
        result.props.children.should.equal(text);
    });
});