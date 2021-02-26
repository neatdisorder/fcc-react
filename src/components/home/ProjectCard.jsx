import React from 'react';
import './project-card-style.css';
import { NavLink } from 'react-router-dom';

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {

        const projects = [{
            title: '💬 Random Quote Machine',
            description: 'A Random Quote Machine shuffling between different quotes by the North American composer John Cage.',
            link: '/random-quote-machine'
        }, {
            title: '📝 Markdown Previewer',
            description: 'A Markdown Previewer built using Marked that renders content using the styling syntax featured on GitHub.',
            link: '/markdown-previewer'
        }, {
            title: '🥁 Drum Machine',
            description: 'A Drum Machine that plays audio samples using both mouse and keyboard.',
            link: '/drum-machine'
        }, {
            title: '🔢 Javascript Calculator',
            description: 'A basic calculator programmed in javascript using React.',
            link: '/javascript-calculator'
        }, {
            title: '⏲️ 25+5 Clock',
            description: 'A 25 + 5 Clock which can be used to track time using the Pomodoro Technique.',
            link: '/clock'
        }];

        return (
            <div className="project-card">
                <NavLink to={projects[this.props.projectId].link} activeClassName="nav-active">
                    <h2>
                        {projects[this.props.projectId].title}
                    </h2>
                    <p>
                        {projects[this.props.projectId].description}
                    </p>
                </NavLink>
            </div>
        );
    };
};

export default ProjectCard;