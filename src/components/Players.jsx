import * as React from 'react';
import {agent} from "../utils/agent";

export class Players extends React.Component {
    constructor(p, s) {
        super(p, s);

        this.state = {
            players: []
        };

        this.loadAll();
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

    async loadAll() {
        const players = await agent.Player.getAll();
        this.setState({players});
    }
}