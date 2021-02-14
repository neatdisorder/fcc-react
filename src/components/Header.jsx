import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import './header-style.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
            <header>
                <Logo />
                <Nav />
            </header>
        );
    };
};

export default Header;