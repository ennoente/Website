import React from 'react';
import './Content.css';

import Profile from "../Profile/Profile";
import MainArticle from '../MainArticle/MainArticle';

import HamburgerBar from '../NavigationBar/HamburgerBar';

const content = props => (
    <div className="content_container" >

        <Profile />

        <MainArticle />

    </div>
);

export default content;