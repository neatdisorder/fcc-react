import React from 'react';
import './project-card-style.css';

class AboutMeCard extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="project-card">
                <a href="https://github.com/neatdisorder/" target="_blank">
                    <h2>
                        👨‍💻 About me
                    </h2>
                    <p>
                        My name is Ignacio Castillo and I'm a web developer from Buenos Aires, Argentina. You can find out more about me on my GitHub profile.
                    </p>
                </a>
            </div>
        );
    };
};

export default AboutMeCard;