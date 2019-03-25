import {observable, action} from "mobx";
import {agent} from "../utils/agent";

export class ArticlesStore {
    @observable
    list = [];

    @observable
    article = {};
    // @action
    async load() {
        this.list = await agent.Articles.getAll();
    }

    async loadByName(index) {
        this.article = await agent.Articles.getByName(index);
    }
}