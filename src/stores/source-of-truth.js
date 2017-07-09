import { createStore } from 'redux';

function reducer (state = false, action) {
    return (action.type === 'TRUTHIFY');
}

const store = createStore(reducer);

export default store;
