import React from 'react';
import Storypart from '../Storypart';

const storypart10 = () => (
  <Storypart
    date={'February - March 2018'}
    tags={[
      'Programming',
      'Job',
      'Ulla Popken',
      'Java',
      'Groovy',
      'Browser-automation',
      'Selenium',
      'Geb / Spock',
      'Automated UI testing',
      'Maven'
    ]}
    text={(
      <span>
        What an exciting time! For my first programming job I rejoin Ulla Popken, only not as an intern,
        but as a student employee. My job is to work out how to automate UI tests and how to implement them
        into the development workflow.
        <br/>
        To achieve this, I work with Geb and Spock, two frameworks building on Selenium and running on Groovy,
        a scripting language built on top of Java.
        <br/>
        I program a prototype test that simulates a complete purchase within the Ulla Popken online-shop. It is
        flexible to support multiple clients (.de, .fr, etc.) and browsers. After having finished, it prints
        the results into the command line.

        <br/>
        <br/>

        I learn a ton of new concepts. Building projects with Maven, presenting my findings and progress at meetings,
        learning how the software development process works, how UI/UX designers and developers work together. It
        is absolutely fascinating to me and I professionalize a lot.
      </span>
    )}
  />
);

export default storypart10;