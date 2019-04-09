import React from 'react';
import Storypart from '../Storypart';

const storypart8 = () => (
  <Storypart
    date={'August 2017'}
    tags={[
      'Internship',
      'Java',
      'Android',
      'Volley',
      'RESTful API'
    ]}
    text={(
      <span>
        For my second internship I work at <a href={'https://www.ullapopken.de'}>Ulla Popken</a>
        where I program a little shopping app with SAP's Hybris in the backend. I learn what APIs in general
        and RESTful APIs in particular are and create a user-interface communicating with the backend via
        Google's <a href={'https://github.com/google/volley'}>Volley</a>, a library for asynchronous HTTP requests.
      </span>
    )}
  />
);

export default storypart8;