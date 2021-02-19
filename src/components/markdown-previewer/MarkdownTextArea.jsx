import React from 'react';
import './markdowntextarea-style.css';

class MarkdownTextArea extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id="text-area">
                <h2>
                    Input your markdown here:
                </h2>
                <textarea id="editor" onChange={this.props.handleChange} value={this.props.value}>
                </textarea>
            </div>
        );
    };
};

export default MarkdownTextArea;