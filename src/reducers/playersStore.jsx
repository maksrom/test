export function players(store = ['a', 'b', 'c'], action) {
    if (action.type === 'add') {
        return [...store, action.item];
    }

    if (action.type === 'delete') {
        const storeCopy = [...store];
        storeCopy.splice(storeCopy.length - 1, 1);
        return storeCopy;
    }

    if (action.type === 'edit') {
        const storeCopy = [...store];
        storeCopy[action.index] = action.newValue;
        return storeCopy;
    }

    return store;
}