import React from 'react';
import marked from 'marked';
import'./markdownpreviewer-style.css';
import MarkdownPreviewerHeader from './MarkdownPreviewerHeader';
import MarkdownPreview from './MarkdownPreview';
import MarkdownTextArea from './MarkdownTextArea';

    marked.setOptions({
        gfm: true,
        breaks: true
    });

    class MarkdownPreviewer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            input: '# HEADER\n\n## HEADER 2\n\nThis is [a link](https://www.google.com).\n\nThis is `inline code`.\n\n```\nThis is a block of code.\nWith various lines\n```\n\n1. This is a the first in a list\n2. This is the second in a list\n3. This is the third in a list\n\n> This is a blockquote\n> This is a blockquote\n\nThis is an image:\n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")\n\nThis is a **bolded text**',
            output: ''
        };
        this.handleChange = this.handleChange.bind(this);
    };
    
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
        document.getElementById("preview").innerHTML = marked(event.target.value);
    };
    
    componentDidMount() {
        document.getElementById("preview").innerHTML = marked(this.state.input);
    }
    
    render() {
        
        return (
            <div id="markdown-previewer-container">
                <MarkdownPreviewerHeader />
                <div id="input-output">
                    <MarkdownTextArea handleChange={this.handleChange} value={this.state.input} />
                    <MarkdownPreview />
                </div>
            </div>
        );
    };
    };

export default MarkdownPreviewer;