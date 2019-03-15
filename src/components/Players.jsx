import * as React from 'react';
import {agent} from "../utils/agent";

export class Players extends React.Component {
    constructor(p, s) {
        super(p, s);

        this.state = {
            players: []
        };

        agent.Player.getAll().then((players) => {
            debugger;
            this.setState({players})
        })
    }

    render() {
        return (
            <ul>
                {this.state.players.map((player, i) => {
                    return (<li key={i}>name: {player.name}, age: {player.age}</li>)
                })}
            </ul>
        )
    }
}