import React from 'react';
import Storypart from '../Storypart';

const storypart9 = () => (
  <Storypart
    date={'October - December 2017'}
    tags={[
      'Pathfinding',
      'Android',
      'Library',
      'Java'
    ]}
    text={(
      <span>
        After having used Volley, I want to take my "sharing my software" idea a bit further: developing software
        not only usable by users, but also by programmers. At that time, I need a pathfinding solution for
        a game I am programming (which I won't tell you about now because the idea is actually really cool, and
        I may finish it someday).
        <br/>
        Thus, I create my first library, <a href={'https://github.com/ennoente/pathfinder-for-android'}>Pathfinder for Android</a>.
        Utilizing the A* pathfinding algorithm it enables developers to asynchronously find the optimal path
        between two nodes in a grid layout.
      </span>
    )}
  />
);

export default storypart9;