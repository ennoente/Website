import React from 'react';
import Storypart from '../Storypart';

const storypart4 = () => (
    <Storypart
        date={'January 2013'}
        tags={[
            'Internship',
            'Qt',
            'QML',
            'Android'
        ]}
        text={(
          <span>
            I do an internship at a local E-Commerce company. Being in the IT branch I am introduced to Qt and its language, QML. Being the nerd I am, I program Monopoly another time, this time with Qt/QML.
            <br/>
            During that time, I come across Necessitas, a Qt port for Android. This idea fascinates me. To this point, I have never thought about my software being seriously used by other people. I’ve just loved experimenting with code and maybe showing it to friends. But making an app that other people, strangers from the Internet, could install and use? That would be awesome!
          </span>
        )}
    />
);

export default storypart4;