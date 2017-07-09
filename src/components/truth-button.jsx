import React from 'react';

import Truth from '../stores/source-of-truth';

class TruthButton extends React.Component {

    componentWillMount () {
        this.toggleSource = function () {
            const type = Truth.getState() ? 'FALSIFY' : 'TRUTHIFY';
            Truth.dispatch({ type });
        }
    }

    render () {
        return <button onClick={this.toggleSource}>TOGGLE SOURCE OF TRUTH</button>;
    }

}

export default TruthButton;
