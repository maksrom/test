import * as Redux from 'redux';

function reducer(store = [], action) {
    if (action.type === 'add') {
        return [...store, action.item];
    }

    if (action.type === 'delete') {
        const storeCopy = [...store];
        storeCopy.splice(storeCopy.length - 1, 1);
        return storeCopy;
    }

    return store;
}

export const playerStore = Redux.createStore(reducer);