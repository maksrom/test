import * as React from 'react';
import {CreateUser} from "./Players/CreateUser";
import {Players} from "./Players/Players";

export class PlayersPage extends React.Component {
    render() {
        return (
            <div className="container">
                <CreateUser/>
                <Players/>
            </div>
        );
    }
}