import * as superagent from 'superagent';

const ROOT_API = 'https://aaaa-54a89.firebaseio.com';

const Player = {
    getAll: () => superagent.get(`${ROOT_API}/players.json`)
        .then((res) => res.body)
};

export const agent = {Player};