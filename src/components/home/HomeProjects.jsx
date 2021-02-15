import React from 'react';
import ProjectCard from './ProjectCard';
import './home-projects-style.css';

class HomeProjects extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id="cards-container">
                <div className="cards-row">
                    <ProjectCard projectId={0} />
                    <ProjectCard projectId={1} />
                    <ProjectCard projectId={2} />
                </div>
                <div className="cards-row">
                    <ProjectCard projectId={3} />
                    <ProjectCard projectId={4} />
                    <ProjectCard projectId={5} />
                </div>
            </div>
        );
    };
}

export default HomeProjects;