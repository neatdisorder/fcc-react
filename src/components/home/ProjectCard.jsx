import React from 'react';

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {

        const projects = [{
            title: 'Random Quote Machine',
            description: 'A random quote machine'
        }, {
            title: 'Markdown Previewer',
            description: 'A markdown previewer'
        }, {
            title: 'Drum Machine',
            description: 'A drum machine'
        }, {
            title: 'Javascript Calculator',
            description: 'A javascript calculator'
        }, {
            title: '25+5 Clock',
            description: 'A 25 + 5 clock'
        }, {
            title: 'Placeholder title',
            description: 'Placehlolder description'
        }

        ];

        return (
            <div>
                <h3>
                    {projects[this.props.projectId].title}
                </h3>
                <p>
                {projects[this.props.projectId].description}
                </p>
            </div>
        );
    };
};

export default ProjectCard;