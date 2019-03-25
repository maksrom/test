import * as React from 'react';
import {inject, observer} from "mobx-react";

@inject('users')
export class CreateUser extends React.Component{

    render() {

        return (
            <button onClick={() => { this.props.users.addUser() }}>
                add
            </button>)
    }

}