import React from 'react';
import './NavigationBar.css';

const navigationBar = props => (
    <header className="navigation_bar_container">

        <nav className="navigation_bar">
            <div className="navigation_bar_items">
                <ul className="navigation_bar_items_list">
                    <li><a href="/">My Story</a></li>
                    <li><a href="/">Software</a></li>
                    <li><a href="/">Technology Stack</a></li>

                    <div className="spacer"/>

                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default navigationBar;