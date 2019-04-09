import React from 'react';
import Storypart from '../Storypart';

const storypart6 = () => (
  <Storypart
    date={'December 2016'}
    tags={[
      'Java',
      'Android',
      'Flappy Bird'
    ]}
    text={(
      <span>
            I rejoin my efforts to try and write my first Android app.
            Finally, I manage to bring my first "Hello World!" app to life.
            Seeing it flash up on my phone is a magical moment and I spent almost all of my free time refreshing and learning Java and the Android API.
            <br/>
            My first app ever is a <a href={'https://github.com/ennoente/Bewegendes-Spielfeld'}>floppy bird clone</a>!
          </span>
    )}
  />
);

export default storypart6;