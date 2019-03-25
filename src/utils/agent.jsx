import * as superagent from 'superagent';

let ROOT_API = 'https://aaaa-54a89.firebaseio.com';

const Articles = {
    getAll: () => superagent.get(`${ROOT_API}/players.json`)
        .then((res) => res.body),

    getByName: (name) => superagent.get(`${ROOT_API}/players/${name}.json`)
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
    }
};

export const agent = {Articles};