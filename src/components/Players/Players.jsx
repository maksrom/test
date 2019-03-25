import * as React from 'react';
import "./Players.scss";
import {connect} from "react-redux";
import {inject, observer} from "mobx-react";
import {CreatePlayer} from "../CreatePlayer";
import {DeletePlayer} from "../../index";

@inject('users', 'score')
@observer
export class Players extends React.Component {

    componentDidMount() {
        this.props.users.load();
    }

    render() {
        return (
            <div id="players">
                <ul>
                    <ul>
                        {this.props.users.list.map((el, i) => {
                            return ( <li key={i}> {el} </li> )
                        })}
                    </ul>

                    {/*{}*/}
                    {/*{this.props.users.state}*/}
                    {/*<button onClick={() => this.props.userMobxStore.addUser()}>add</button>*/}
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