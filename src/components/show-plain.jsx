import React from 'react';

import Truth from '../stores/source-of-truth';

class ShowPlain extends React.Component {

    componentWillMount () {
        this.state = this.formattedState();
        this.changeDisplay = this.changeDisplay.bind(this);
    }

    componentDidMount () {
        Truth.subscribe(this.changeDisplay);
    }

    formattedState () {
        return { truth: Truth.getState() ? "True" : "False" };
    }

    changeDisplay () {
        this.setState(this.formattedState());
    }

    render () {
        return (
            <div>
                <p>Current State: {this.state.truth}</p>
            </div>
        );
    }

}

export default ShowPlain;
