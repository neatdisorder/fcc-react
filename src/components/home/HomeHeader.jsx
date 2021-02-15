import React from 'react';
import './home-header-style.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id="home-header">
                <div id="home-header-container">
                    <h1>
                        freeCodeCamp React Projects
                    </h1>
                    <p>
                        This is a portfolio containing my <a href="https://www.freecodecamp.org/learn/front-end-libraries/#front-end-libraries-projects" target="_blank">freeCodeCamp Front End Libraries</a> projects, created using <a href="https://es.reactjs.org/" target="_blank">React</a>.
                    </p>
                </div>
            </div>
        );
    };
};

export default Home;