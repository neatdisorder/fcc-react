import React from 'react';

class MarkdownPreviewer extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <main>
                <h1>
                    Markdown Previewer
                </h1>
                <p>
                    This is a Markdown Previewer.
                </p>
            </main>
        );
    };
};

export default MarkdownPreviewer;