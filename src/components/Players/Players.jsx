import * as React from 'react';
import {agent} from "../../utils/agent";
import "./Players.scss";
import {connect} from "react-redux";

class PlayersClass extends React.Component {
    root;

    constructor(p, s) {
        super(p, s);

        this.state = {
            newPlayer: {name: '', age: '77'},
            players: []
        };

        this.loadAll();

        console.log(this.props);
        debugger;
    }

    render() {
        console.log(this.state);

        return (
            <div id="players" ref={(el) => this.root = el}>
                    <div className="card">
                        <div className="card-body">
                                <form action="#">
                                    <div className="form-group row justify-content-center">
                                        <label htmlFor="name"
                                               className="col-form-label col-sm-6 col-12"
                                        >Name: </label>
                                        <input type="text"
                                               className="form-control col-sm-6 col-11"
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
        this.root.classList.add('loading');

        setTimeout(() => {
            agent.Player.add(
                this.state.newPlayer,
                this.state.players.length,
                () => {
                    this.loadAll();
                    this.root.classList.remove('loading');
                }
            )
        }, 3000);


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

export const Players = connect(
    function (store) {
        return {
            playersStore: store
        }
    },
    (dispach) => ({
        add: (item = 'k') => dispach({type: 'add', item})
    })
)(PlayersClass);