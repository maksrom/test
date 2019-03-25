import {observable, action} from "mobx";
import {agent} from "../utils/agent";

export class Users {
    @observable
    list = [];

    @observable
    articles = [{id: 1, name: 222}];

    addNewArticle(name = 'name') {
        this.articles.push({id: 2, name});
    }

    async load() {
        var players = await agent.Player.getAll();
        this.list = players.map((el) => el.name)
    }

    addUser() {
        setTimeout(() => {
            this.list.push('sss');
        }, 1000)
    }
}