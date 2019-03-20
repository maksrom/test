import * as superagent from 'superagent';

let ROOT_API = 'https://aaaa-54a89.firebaseio.com';
console.log('PRODUCTION');

/* develblock:start */
// ROOT_API = 'aaaa';
// console.log('DEVELOPMENT');
/* develblock:end */

const Player = {
    getAll: () => superagent.get(`${ROOT_API}/players.json`)
        .then((res) => res.body),
    add: (players, index, cb) => {
        superagent.put(`${ROOT_API}/players/${index}.json`)
            .send(players)
            .end(cb)
    },
    delete: (players, cb = () => {}) => {
        superagent.put(`${ROOT_API}/players.json`)
            .send(players)
            .end(cb)

        // superagent.del(`${ROOT_API}/players/${index}.json`)
        //     .end(() => {})
    }
};

export const agent = {Player};