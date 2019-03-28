import React from 'react';

import Profile from "./Profile/Profile";
import MainArticle from './MainArticle/MainArticle';

const home = props => (
    <div className="content_container">
        <Profile/>

        <MainArticle/>
    </div>
);

export default home;