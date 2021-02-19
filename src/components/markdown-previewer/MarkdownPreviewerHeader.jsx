import React from 'react';
import './markdown-previewer-header-style.css';
import background from '../../assets/React.svg';

class MarkdownPreviewerHeader extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id="home-header">
                <div id="home-header-container">
                    <h1>
                        Markdown Previewer
                    </h1>
                    <p>
                        A Markdown Previewer built using <a href="https://marked.js.org/" target="_blank">Marked</a> that renders content using the styling syntax featured on <a href="https://guides.github.com/features/mastering-markdown/" target="_blank">GitHub</a> . 
                    </p>
                </div>
                <img src={background} alt="React logo" />
            </div>
        );
    };
};
export default MarkdownPreviewerHeader;