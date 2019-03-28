import React, {Component} from 'react';
import './HamburgerBar.css';
import {
    Link
} from 'react-router-dom';

class HamburgerBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hamburgerBarState: "hamburger_bar_in",
            hamburgerButtonState: "hamburger_toggle",
            hamburgerButtonText: String.fromCharCode('9776')
        }
    }

    expandHamburgerBar = () => {
        this.setState({
            hamburgerBarState: "hamburger_bar_out",
            hamburgerButtonState: "crossToggle",
            hamburgerButtonText: String.fromCharCode('735')
        });
    };

    collapseHamburgerBar = () => {
        this.setState({
            hamburgerBarState: "hamburger_bar_in",
            hamburgerButtonState: "hamburger_toggle",
            hamburgerButtonText: String.fromCharCode('9776')
        });
    };

    render() {
        return (
            <nav className={this.state.hamburgerBarState}>
                <ul>
                    <li>
                        <Link onClick={this.collapseHamburgerBar} to="/">Enno Thoma</Link>
                        <button className={this.state.hamburgerButtonState}
                                onClick={this.toggleHandler}>{this.state.hamburgerButtonText}</button>
                    </li>
                    <li>
                        <Link onClick={this.collapseHamburgerBar} to="/my-story">My Story</Link>
                    </li>
                    <li>
                        <Link onClick={this.collapseHamburgerBar} to="/software">Software</Link>
                    </li>
                    <li>
                        <Link onClick={this.collapseHamburgerBar} to="/tech-stack">Technology Stack</Link>
                    </li>
                    <li>
                        <Link onClick={this.collapseHamburgerBar} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        )
    }

    toggleHandler = () => {
        if (this.state.hamburgerBarState === "hamburger_bar_in") {
            this.expandHamburgerBar();
        } else {
            this.collapseHamburgerBar();
        }
    }
}

export default HamburgerBar;