import React from 'react';
import ProjectCard from './ProjectCard';
import AboutMeCard from './AboutMeCard';
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
                    <AboutMeCard />
                </div>
            </div>
        );
    };
}

export default HomeProjects;