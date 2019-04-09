import React from 'react';
import Storypart from '../Storypart';

const filesyncGithubURL = 'https://github.com/ennoente/FileSync-Server';

const storypart7 = () => (
  <Storypart
    date={'January-July 2017'}
    tags={[
      'Java',
      'Android',
      '"Homemade" database',
      'Networking',
      'Encryption',
      'SSL/TLS'
    ]}
    text={(
      <span>
        A cross-device project I focus on is <a href={filesyncGithubURL}>FileSync</a>. Its goal is to have a server storing your data and being able to
        access your data via a native Java and an Android app. Groundbreaking, right? For me, it is a big project introducing me to lots of new concepts:
        networking, storing user data with homemade databases, encryption with SSL and TLS, designing a good UI/UX, and many more.
        <br />
        I always enjoy looking back at old projects. I remember making "homemade" databases which were essentially plain-text files that my code iterated
        through completely each time it made a query. The concepts of databases SQL and JDBC were foreign for me, then. Haha.
      </span>
    )}
  />
);

export default storypart7;