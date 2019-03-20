import * as React from 'react';
import {agent} from "../../utils/agent";
import "./Players.scss";

export class Players extends React.Component {
    constructor(p, s) {
        super(p, s);

        this.state = {
            newPlayer: {name: '', age: '77'},
            players: []
        };

        this.loadAll();
    }

    render() {
        return (
            <div id="players">

                <div className="card">
                    <div className="card-body">
                        <form onSubmit={() => this.addNewPlayer()} action="#">
                            <div className="form-group">
                                <label htmlFor="name">Name: </label>
                                <input type="text"
                                       className="form-control"
                                       id="name"
                                       placeholder="my name"
                                       onChange={(e) => this.changeNewPlayerName(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Age: </label>
                                <input type="text"
                                       className="form-control"
                                       id="name"
                                       placeholder="my age"
                                       onChange={(e) => this.changeNewPlayerAge(e.target.value)}
                                />
                            </div>

                            <button type="submit"
                                    className="btn btn-primary"
                                    onClick={() => this.addNewPlayer()}
                            >Add</button>

                        </form>
                    </div>


                </div>



                <ul>
                    {this.state.players.map((player, i) => {
                        return (<li key={i}>name: {player.name}, age: {player.age}
                            <button onClick={() => {this.deletePlayer(i)}}>x</button>
                        </li>)
                    })}
                </ul>
            </div>
        )
    }

    changeNewPlayerName(name) {
        this.setState({
            newPlayer: Object.assign(this.state.newPlayer, {name} )
        })
    }

    changeNewPlayerAge(age) {
        this.setState({
            newPlayer: Object.assign(this.state.newPlayer, {age} )
        })
    }

    addNewPlayer() {
        agent.Player.add(
            this.state.newPlayer,
            this.state.players.length,
            () => {
               this.loadAll();
            }
        )
    }

    deletePlayer(index) {
        this.state.players.splice(index, 1);
        agent.Player.delete(this.state.players, () => {
            this.loadAll();
        })
    }

    async loadAll() {
        const players = await agent.Player.getAll();
        this.setState({players});
    }
}