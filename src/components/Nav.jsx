import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <ul>
                <li>
                    <Link to="/random-quote-machine">
                        Random Quote Machine
                    </Link>
                </li>
                <li>
                    <Link to='/markdown-previewer'>
                        Markdown Previewer
                    </Link>
                </li>
                <li>
                    <Link to='/drum-machine'>
                        Drum Machine
                    </Link>
                </li>
                <li>
                    <Link to='/javascript-calculator'>
                        Javascript Calculator
                    </Link>
                </li>
                <li>
                    <Link to='/clock'>
                        25 + 5 Clock
                    </Link>
                </li>
            </ul>
        );
    };
};

export default Nav;