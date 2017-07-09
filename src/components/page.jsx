import React from 'react';
import Redux from 'redux';

import TruthButton from './truth-button.jsx';
import ShowPlain from './show-plain.jsx';
import News from './news.jsx';

import Truth from '../stores/source-of-truth';

class Page extends React.Component {

    render () {
        return (
            <div>
                <ShowPlain/>
                <TruthButton/>
                <News/>
            </div>
        );
    }

};

export default Page;
