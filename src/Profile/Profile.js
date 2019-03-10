import React from 'react';
import './Profile.css';
import ProfilePic from '../ProfilePic/ProfilePic';

const Profile = props => (
    <div className="profile">


        <ProfilePic />


        <p>Full Stack Web Developer</p>
        <p>Musician</p>
        <p>Student</p>
        <p>Volunteer Firefighter</p>
    </div>
);

export default Profile;