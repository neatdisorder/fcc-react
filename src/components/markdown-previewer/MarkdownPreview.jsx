import React from 'react';
import './markdownpreview-style.css';

class MarkdownPreview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="preview-area">
                <h2>
                    Preview your markdown here:
                </h2>
                <div id="preview">
                </div>
            </div>
        )
    }
}

export default MarkdownPreview;