import React from 'react';
import './Content.css';

import Profile from "../Profile/Profile";
import MainArticle from '../MainArticle/MainArticle';

const content = props => (
    <div className="content_container" >

        <Profile />

        <MainArticle />

    </div>
);

export default content;