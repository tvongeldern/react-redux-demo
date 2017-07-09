import React from 'react';

import Truth from '../stores/source-of-truth';

class News extends React.Component {

    componentWillMount () {
        this.state = this.formattedState();
        this.setDisplay = this.setDisplay.bind(this);
    }

    componentDidMount () {
        Truth.subscribe(this.setDisplay);
    }

    formattedState () {
        return { truth: Truth.getState() ? "Peer-Reviewed Journal" : "Fake News" };
    }

    setDisplay () {
        this.setState(this.formattedState())
    }

    render () {
        return <h1>{this.state.truth}</h1>
    }

};

export default News;
