import React from 'react';
import './Profile.css';
import ProfilePic from '../ProfilePic/ProfilePic';
import Info from './Info';

import locationIcon from '../img/location.png';
import atSignIcon from '../img/at-sign.png';
import codeIcon from '../img/code.png';

const Profile = props => (
    <div className="profile">

        <ProfilePic />

            <p className="profile_bio">
                    Programmer, musician, student, volunteer firefighter. Will do practically anything for chocolate
            </p>

        <Info icon={codeIcon} infoText="Full-Stack Web Developer" />
        <Info icon={locationIcon} infoText="Oldenburg, Germany" />
        <Info icon={atSignIcon} infoText="contact@ennothoma.io" />
    </div>
);

export default Profile;