import * as React from 'react';
import "./Players.scss";
import {connect} from "react-redux";

class PlayersClass extends React.Component {
    render() {
        return (
            <div id="players">
                <ul>
                    {this.props.playersStore.map((player, i) => {
                        return (
                            <li key={i}>name: {player}
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
    () => ({})
)(PlayersClass);