import React, { Component } from 'react';
import './HamburgerBar.css';

class HamburgerBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hamburgerBarState: "hamburger_bar_in",
            hamburgerButtonState: "hamburger_toggle",
            hamburgerButtonText: String.fromCharCode('9776')
        }
    }

    render() {
        return(
            <nav className={this.state.hamburgerBarState}>
                <ul>
                    <li>
                        Enno Thoma
                        <button className={this.state.hamburgerButtonState} onClick={this.toggleHandler}>{this.state.hamburgerButtonText}</button>
                    </li>
                    <li>
                        <a href="/">My Story</a>
                    </li>
                    <li>
                        <a href="/">Software</a>
                    </li>
                    <li>
                        <a href="/">Technology Stack</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </nav>
        )
    }

    toggleHandler = () => {
        if (this.state.hamburgerBarState === "hamburger_bar_in") {
            this.setState({
                hamburgerBarState: "hamburger_bar_out",
                hamburgerButtonState: "crossToggle",
                hamburgerButtonText: String.fromCharCode('735')
            });
        } else {
            this.setState({
                hamburgerBarState: "hamburger_bar_in",
                hamburgerButtonState: "hamburger_toggle",
                hamburgerButtonText: String.fromCharCode('9776')
            });
        }
    }
}

export default HamburgerBar;