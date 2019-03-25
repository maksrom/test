import {observable, action} from "mobx";

export class Users {
    @observable
    users = ['aa', 'bb'];

    @action
    addUser() {
        this.users.push('cc');
    }
}