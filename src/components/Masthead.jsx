import React from 'react';
import './masthead-style.css';
import background from '../assets/React.svg';

class Masthead extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {

        const values = [{
            title: 'freeCodeCamp React Projects',
            description: <span>This is a portfolio containing my <a href="https://www.freecodecamp.org/learn/front-end-libraries/#front-end-libraries-projects" target="_blank">freeCodeCamp Front End Libraries</a> projects, created using <a href="https://es.reactjs.org/" target="_blank">React</a>.</span>
        }, {
            title: 'Random Quote Machine',
            description: <span>A Random Quote Machine shuffling between different quotes by the <a href="https://en.wikipedia.org/wiki/John_Cage" target="_blank">North American composer John Cage</a>.</span>
        }, {
            title: 'Markdown Previewer',
            description: <span>A Markdown Previewer built using <a href="https://marked.js.org/" target="_blank">Marked</a> that renders content using the styling syntax featured on <a href="https://guides.github.com/features/mastering-markdown/" target="_blank">GitHub</a>.</span>
        }, {
            title: 'Drum Machine',
            description: 'A Drum Machine that plays audio samples using both mouse and keyboard.'
        }, {
            title: 'Javascript Calculator',
            description: 'A basic calculator programmed in javascript using React.'
        }, {
            title: '25 + 5 Clock',
            description: <span>A 25 + 5 Clock which can be used to track time using the <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank">Pomodoro Technique</a>.</span>
        }]

        return (
            <div id="home-header">
                <div id="home-header-container">
                    <h1>
                        {values[this.props.value].title}
                    </h1>
                    <p>
                        {values[this.props.value].description}
                    </p>
                </div>
                <img src={background} alt="React logo" />
            </div>
        );
    };
};

export default Masthead;