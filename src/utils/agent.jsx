import * as superagent from 'superagent';

const ROOT_API = 'https://aaaa-54a89.firebaseio.com';

const Player = {
    getAll: () => superagent.get(`${ROOT_API}/players.json`)
        .then((res) => res.body),
    add: (players, index, cb) => {
        superagent.put(`${ROOT_API}/players/${index}.json`)
            .send(players)
            .end(cb)
    }
};

export const agent = {Player};