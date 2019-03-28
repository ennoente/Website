import React from 'react';
import './NavigationBar.css';

import {
    Link,
} from 'react-router-dom';

const navigationBar = props => (
    <header className="navigation_bar_container">

        <nav className="navigation_bar">
            <div className="navigation_bar_items">
                <ul className="navigation_bar_items_list">
                    <li><Link to="/">Enno Thoma</Link></li>
                    <li><Link to="/my-story">My Story</Link></li>
                    <li><Link to="/software">Software</Link></li>
                    <li><Link to="/tech-stack">Technology Stack</Link></li>

                    <div className="spacer" />

                    <li><Link to="/">Contact</Link></li>
                </ul>
            </div>
        </nav>

    </header>
);

export default navigationBar;