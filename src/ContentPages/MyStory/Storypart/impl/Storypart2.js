import React from 'react';
import Storypart from '../Storypart';

const storypart2 = () => (
    <Storypart
        date={'2011'}
        tags={
            [
                'Java',
                'Eclipse',
                'GUI',
                'Object-oriented Programming'
            ]
        }
        text={'My brother, Arne, sets up Eclipse on my computer. From the start, Java has me hooked. The first programs add two numbers and print the result into the console.\n' +
        'The main thought driving me forward is: “I wonder if I can ...”. I love experimenting with the language.\n' +
        'Some of the bigger projects include writing a 2000 line calculator (with GUI!) that can perform various operations, and a rudimentary monopoly game.'}
    />
);

export default storypart2;