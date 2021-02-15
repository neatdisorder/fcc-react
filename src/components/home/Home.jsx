import React from 'react';
import HomeHeader from './HomeHeader';
import HomeProjects from './HomeProjects';

class Home extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <HomeHeader />
                <HomeProjects />
            </div>
        );
    };
};

export default Home;