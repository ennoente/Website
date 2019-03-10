import React from 'react';
import './SocialMediaBar.css';

import Icon from '../Icon';

import smb_github from '../img/github.png';
import smb_twitter from '../img/twitter.png';
import smb_instagram from '../img/instagram.png';
import smb_twitch from '../img/twitch.png';
import smb_facebook from '../img/facebook.svg';
import smb_email from '../img/email.png';

const socialMediaBar = props => (
    <footer className="footer">
        <div className="social_media_bar">
            <Icon link="https://github.com/ennoente" icon={smb_github}/>
            <Icon link="https://twitter.com/ThomaEnno" icon={smb_twitter} />
            <Icon link="https://www.instagram.com/ennothoma" icon={smb_instagram} />
            <Icon link="https://www.facebook.com/enno.thoma" icon={smb_facebook} />
            <Icon link="/" icon={smb_twitch} />
            <Icon link="mailto:contact@ennothoma.io" icon={smb_email} />
        </div>
    </footer>
);

export default socialMediaBar;