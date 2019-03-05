import React from 'react';
import './ProfilePic.css';

import profilePicImg from '../img/Thoma Profilbild.png';

const profilePic = props => (
    <div className="pic">
        <img src={profilePicImg} />
    </div>
);

export default profilePic;