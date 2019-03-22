import * as React from 'react';
import "./Players.scss";
import {connect} from "react-redux";

class PlayersClass extends React.Component {
    render() {
        return (
            <div id="players">
                <ul>
                    {this.props.playersStore.map((player, index) => {
                        return (
                            <li key={index}>
                                <span>name: {player}</span>
                                <input value={player} onChange={(evt) => {
                                    this.props.edit(index, evt.target.value);
                                }}/>
                                {/*<button onClick={() => {this.deletePlayer(i)}}>x</button>*/}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export const Players = connect(
    (store) => ({
        playersStore: store
    }),
    (dipach) => ({
        edit: (index, newValue) => dipach({ type: 'edit', index, newValue })
    })
)(PlayersClass);