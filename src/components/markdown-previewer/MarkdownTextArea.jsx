import React from 'react';

class MarkdownTextArea extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <textarea id="editor" onChange={this.props.handleChange} value={this.props.value}>
            </textarea>
        );
    };
};

export default MarkdownTextArea;