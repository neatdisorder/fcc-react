import React from 'react';
import './random-quote-machine-header-style.css';
import background from '../../assets/React.svg';

class Home extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id="home-header">
                <div id="home-header-container">
                    <h1>
                        Random Quote Machine
                    </h1>
                    <p>
                        A Random Quote Machine showing different quotes by the <a href="https://en.wikipedia.org/wiki/John_Cage" target="_blank">North American composer John Cage</a>.
                    </p>
                </div>
                <img src={background} alt="React logo" />
            </div>
        );
    };
};

export default Home;