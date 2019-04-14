import React from 'react';
import Storypart from '../Storypart';

const storypart11 = () => (
  <Storypart
    date={'November 2018 - Now'}
    tags={[
      'Web Development',
      'HTML/CSS',
      'Javascript',
      'ReactJS'
    ]}
    text={(
     <span>
       After a short break from programming, I restart by learning web development. My first big project
       that I still work on is <a href={'https://github.com/ennoente/SQLite4Web'}>SQLite4Web</a>, a web-
       based interface for SQLite databases.
       <br/>
       I finally get my own domain (the one you are on right now) and server to host my projects.
       My frontend tool of choice is ReactJS which is powering this website.
       <br/>
       <br/>
       I am excited to keep programming and seeing where my journey will take me. If you stuck around until
       here, thank you! It's been a long read, huh?
     </span>
    )}
  />
);

export default storypart11;