import React from 'react';
import { Link } from 'react-router-dom';

class Logo extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <h1>
                <Link to='/'>
                    FCC React Projects
                </Link>
            </h1>
        );
    };
};

export default Logo;