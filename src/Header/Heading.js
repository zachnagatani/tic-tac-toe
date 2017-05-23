import React from 'react';

class Heading extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            restartCounter: 3
        };
    }

    render() {
        if (!this.props.winner) {
            return (
                <header className="header">
                    <h1>{this.props.text}</h1>
                </header>
            );
        } else {
            return (
                <header className="header">
                    <h1>{this.props.text}</h1>
                    <p>Game will restart in a moment...</p>
                </header>
            );
        }
    }
};

export default Heading;