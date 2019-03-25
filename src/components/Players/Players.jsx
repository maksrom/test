import * as React from 'react';
import "./Players.scss";
import {connect} from "react-redux";
import {inject, observer} from "mobx-react";

@inject('userMobxStore')
@observer
export class Players extends React.Component {
    render() {
        return (
            <div id="players">
                <ul>

                    {JSON.stringify(this.props.userMobxStore.users)}
                    <button onClick={() => this.props.userMobxStore.addUser()}>add</button>
                    {/*{this.props.playersStore.map((player, index) => {*/}
                        {/*return (*/}
                            {/*<li key={index}>*/}
                                {/*<span>name: {player}</span>*/}
                                {/*<input value={player} onChange={(evt) => {*/}
                                    {/*this.props.edit(index, evt.target.value);*/}
                                {/*}}/>*/}
                                {/*/!*<button onClick={() => {this.deletePlayer(i)}}>x</button>*!/*/}
                            {/*</li>*/}
                        {/*)*/}
                    {/*})}*/}
                </ul>
            </div>
        )
    }
}

// export const Players = connect(
//     (store) => ({
//         playersStore: store
//     }),
//     (dipach) => ({
//         edit: (index, newValue) => dipach({ type: 'edit', index, newValue })
//     })
// )(PlayersClass);