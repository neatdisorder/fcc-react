import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav-style.css';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <ul>
                <li>
                    <NavLink to="/random-quote-machine" activeClassName="nav-active">
                        Random Quote Machine
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/markdown-previewer' activeClassName="nav-active">
                        Markdown Previewer
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/drum-machine' activeClassName="nav-active">
                        Drum Machine
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/javascript-calculator' activeClassName="nav-active">
                        Javascript Calculator
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clock' activeClassName="nav-active">
                        25 + 5 Clock
                    </NavLink>
                </li>
            </ul>
        );
    };
};

export default Nav;